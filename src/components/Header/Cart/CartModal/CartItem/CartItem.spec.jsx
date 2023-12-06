import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme, itemDefault } from "../../../../../../.jest/utils";
import * as hookCart from "../../../../../hooks/useCart";
import { CartProvider } from "../../../../../contexts/CartContext";
import CartItem from "./";

function renderCartItem(item = itemDefault) {
  return renderWithTheme(
    <CartProvider>
      <CartItem item={item} />
    </CartProvider>
  );
}

const item = { ...itemDefault, quantity: 2 };

function createUseCartSpy(mockFunction) {
  return jest
    .spyOn(hookCart, "useCart")
    .mockImplementationOnce(() => ({ removeCartProduct: mockFunction }));
}

describe("<CartItem />", () => {
  it("should render CartItem component", () => {
    const { getByTestId } = renderCartItem(item);
    const totalPrice = getByTestId("total-price");

    expect(totalPrice).toBeInTheDocument();
    expect(totalPrice).toHaveTextContent("$250.00");
    expect(screen.getByText("$125.00 x 2")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /product 1/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /title mock/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /deletar item/i })).toBeInTheDocument();
    expect(getByTestId("trash-svg")).toBeInTheDocument();
  });

  it("should call removeCartProduct function when delete button clicked", async () => {
    const mockFunction = jest.fn();
    createUseCartSpy(mockFunction);
    renderCartItem(item);
    const deleteButton = screen.getByRole("button", { name: /deletar item/i });

    expect.assertions(3);
    expect(deleteButton).toBeInTheDocument();

    await userEvent.click(deleteButton);

    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith(itemDefault.product.id);
  });
});

describe("<CartItem /> snapshots", () => {
  it("should match snapshot", () => {
    const {container} = renderCartItem(item);
    expect(container.firstChild).toMatchSnapshot();
  });
});
