import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../../../.jest/utils";
import Button from "./index";

function renderButton(clickFunction = jest.fn()){
  return renderWithTheme(<Button onClick={clickFunction}>Add to cart</Button>);
}

describe("<Button />", () => {
  it('should render button with text "Add to cart"', () => {
    renderButton();

    const button = screen.getByRole("button", { name: "Add to cart" });
    expect(button).toBeInTheDocument();
  });

  it("should call function on button click", async () => {
    const fn = jest.fn();
    renderButton(fn);

    const button = screen.getByRole("button", { name: "Add to cart" });

    await userEvent.click(button);

    expect.assertions(1);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});

describe("<Button /> snapshots", () => {
  it("should match snapshot", () => {
    const { container } = renderButton();
    expect(container.firstChild).toMatchSnapshot();
  });
});
