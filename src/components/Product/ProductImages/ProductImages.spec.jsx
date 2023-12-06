import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme, productDefault } from "../../../../.jest/utils";
import { ImageProductProvider } from "../../../contexts/ImageProductContext";
import * as hookProductImage from "../../../hooks/useProductImage";
import * as hookMedia from "../../../hooks/useMedia";
import ProductImages from ".";

const images = productDefault.pictures;

function renderProductImages(modalActive, mockFunction = jest.fn()) {
  return renderWithTheme(
    <ImageProductProvider>
      <ProductImages
        images={images}
        modalActive={modalActive}
        handleModalActive={mockFunction}
      />
    </ImageProductProvider>
  );
}

function createUseProductImageSpy() {
  return jest.spyOn(hookProductImage, "useProductImage").mockReturnValue({
    featuredImage: images[0],
    imageIndexActive: 0,
    handleChangeImage: jest.fn(),
    handleClickFeaturedImage: jest.fn(),
  });
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

describe("<ProductImages />", () => {
  it("should render a ProductImages component with featured image and images", () => {
    const { getByTestId } = renderProductImages(false);

    const featuredImage = getByTestId("featured-image");
    const totalImagesOnPage = screen.getAllByRole("img");

    expect(featuredImage).toBeInTheDocument();
    expect(totalImagesOnPage.length).toBe(5);
  });

  it("should render next and previous buttons when 'modalActive' property is true", () => {
    renderProductImages(true);

    const previousButton = screen.getByRole("button", {
      name: /imagem anterior/i,
    });
    const nextButton = screen.getByRole("button", { name: /próxima imagem/i });

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("should render next and previous buttons when 'smallScreen' property is true", () => {
    const spy = createUseMediaSpy(true);
    renderProductImages(false);

    const previousButton = screen.getByRole("button", {
      name: /imagem anterior/i,
    });
    const nextButton = screen.getByRole("button", { name: /próxima imagem/i });

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    spy.mockRestore();
  });

  it("should render featured image with className 'small' when 'modalActive' and 'smallScreen' are true", () => {
    createUseMediaSpy(true);
    const { getByTestId } = renderProductImages(true);
    const featuredImageContainer = getByTestId("container-featured-image");

    expect(featuredImageContainer).toHaveClass("small");
  });

  it("should call two functions on click featured image if 'modalActive' prop is false", async () => {
    const spy = createUseProductImageSpy();

    const handleModalActiveMock = jest.fn();
    const { getByTestId } = renderProductImages(false, handleModalActiveMock);
    const featuredImage = getByTestId("featured-image");

    await userEvent.click(featuredImage);

    expect.assertions(2);
    expect(spy().handleClickFeaturedImage).toHaveBeenCalledTimes(1);
    expect(handleModalActiveMock).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });

  it("shouldn't call two functions on click featured image if 'modalActive' prop is true", async () => {
    const spy = createUseProductImageSpy();

    const handleModalActiveMock = jest.fn();
    const { getByTestId } = renderProductImages(true, handleModalActiveMock);
    const featuredImage = getByTestId("featured-image");

    await userEvent.click(featuredImage);

    expect.assertions(2);
    expect(spy().handleClickFeaturedImage).toHaveBeenCalledTimes(0);
    expect(handleModalActiveMock).toHaveBeenCalledTimes(0);
    spy.mockRestore();
  });
});

describe("<ProductImages /> snapshots", () => {
  it("should match snapshot", () => {
    createUseMediaSpy(false);
    const { container } = renderProductImages(false);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot when small screen", () => {
    createUseMediaSpy(true);
    const { container } = renderProductImages(false);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot when modal active", () => {
    createUseMediaSpy(false);
    const { container } = renderProductImages(true);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot when modal active and small screen", () => {
    createUseMediaSpy(true);
    const { container } = renderProductImages(true);
    expect(container.firstChild).toMatchSnapshot();
  });
});
