import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../../../.jest/utils";
import * as hookCart from "../../../hooks/useCart";
import { CartProvider } from "../../../contexts/CartContext";
import Cart from ".";

function renderCart() {
  return renderWithTheme(
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}

function createUseCartSpy(hasItem, quantityItems) {
  return jest.spyOn(hookCart, "useCart").mockReturnValue({
    clearCart: jest.fn(),
    cartHasItems: hasItem,
    totalQuantityItemsCart: quantityItems,
  });
}

describe("<Cart />", () => {
  it("should render Cart component", () => {
    createUseCartSpy(false, 0);
    renderCart();

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByTestId("cart-svg")).toBeInTheDocument();
    expect(screen.queryByTestId("cart-detail")).not.toBeInTheDocument();
    expect(screen.getByRole("region", { name: "carrinho de compras" })).toBeInTheDocument();
  });
  it("should render Cart component with quantity items detail", () => {
    const spy = createUseCartSpy(true, 2);
    renderCart();
    const cartDetail = screen.getByTestId("cart-detail");

    expect(cartDetail).toBeInTheDocument();
    expect(cartDetail).toHaveTextContent("2");
    spy.mockRestore();
  });
  it("should open cart modal when cart button clicked", async () => {
    const spy = createUseCartSpy(false, 0);
    renderCart();
    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect.assertions(2);
    expect(screen.getByRole("region", { name: "modal carrinho de compras" })).toBeInTheDocument();
    expect(screen.getByText(/your cart is empty\./i)).toBeInTheDocument();
    spy.mockRestore();
  });
});

describe("<Cart /> snapshots", () => {
  it("should match snapshot when cart is empty", () => {
    createUseCartSpy(false, 0);
    const { container } = renderCart();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot when cart not is empty", () => {
    createUseCartSpy(true, 1);
    const { container } = renderCart();
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot when cart modal open", async () => {
    createUseCartSpy(true, 1);
    const { container } = renderCart();
    const button = screen.getByRole("button");

    await userEvent.click(button);
    expect(container.firstChild).toMatchSnapshot();
  });
});
