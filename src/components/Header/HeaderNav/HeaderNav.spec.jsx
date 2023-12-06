import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../../../.jest/utils";
import * as hookMedia from "../../../hooks/useMedia";
import HeaderNav from ".";

function renderHeaderNav() {
  return renderWithTheme(<HeaderNav />);
}

function createUseMediaSpy(smallScreen) {
  return jest.spyOn(hookMedia, "useMedia").mockReturnValue(smallScreen);
}

jest.mock("../../../hooks/useMedia", () => ({
  __esModule: true,
  useMedia: () => {
    return false;
  },
}));

describe("<HeaderNav />", () => {
  it("should render HeaderNav component", () => {
    renderHeaderNav();
    
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(5);
    expect(screen.getByRole('link', { name: 'Men' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Women' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'Contact'})).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Collections' })).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  
  it("should render menu button when smallScreen is true", () => {
    createUseMediaSpy(true);
    const { getByTestId } = renderHeaderNav();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(getByTestId("nav-list")).toHaveClass('smallScreen');
  });

  it("should change button icon when menu button is clicked", async () => {
    createUseMediaSpy(true);
    const { getByTestId } = renderHeaderNav();
    const menuButton = screen.getByRole('button');

    expect.assertions(3);
    expect(menuButton).toBeInTheDocument();
    expect(getByTestId("menu-svg")).toBeInTheDocument();

    await userEvent.click(menuButton);

    expect(getByTestId("close-svg")).toBeInTheDocument();
  });
  
  it("should change menuActive when menu button clicked", async () => {
    createUseMediaSpy(true);
    const { getByTestId } = renderHeaderNav();
    const menuButton = screen.getByRole('button');
    const navList = getByTestId("nav-list");
    await userEvent.click(menuButton);

    expect.assertions(3);
    expect(menuButton).toBeInTheDocument();
    expect(navList).toHaveClass('smallScreen');
    expect(navList).toHaveClass('menuActive'); 
  });
});

describe("<HeaderNav /> snapshots", () => {
  it("should match snapshot", () => {
    createUseMediaSpy(false);
    const { container } = renderHeaderNav();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot small screen", () => {
    createUseMediaSpy(true);
    const { container } = renderHeaderNav();
    expect(container.firstChild).toMatchSnapshot();
  });
  
  it("should match snapshot when not small screen", () => {
    createUseMediaSpy(false);
    const { container } = renderHeaderNav();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot small screen and menu active", async () => {
    createUseMediaSpy(true);
    const { container } = renderHeaderNav();

    const menuButton = screen.getByRole('button');
    await userEvent.click(menuButton);

    expect(container.firstChild).toMatchSnapshot();
  });
});
