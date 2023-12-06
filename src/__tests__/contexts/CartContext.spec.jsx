import {
  screen,
  renderHook,
  act,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../../.jest/utils";
import { CartContext, CartProvider } from "../../contexts/CartContext";
import { ImageProductProvider } from "../../contexts/ImageProductContext";
import Cart from "../../components/Header/Cart";
import Product from "../../components/Product";
import { useContext } from "react";

function renderProductAndCart() {
  return renderWithTheme(
    <CartProvider>
      <Cart />
      <ImageProductProvider>
        <Product />
      </ImageProductProvider>
    </CartProvider>
  );
}

jest.mock("../../hooks/useMedia", () => ({
  __esModule: true,
  useMedia: () => {
    return false;
  },
}));

jest.mock("../../hooks/useFetch", () => ({
  __esModule: true,
  useFetch: () => ({
    data: {
      id: "id-1",
      brand: "brand-1",
      title: "title-1",
      price: 10,
      discount: 0.5,
      description: "description-1",
      pictures: [
        {
          src: "image-1.jpg",
          thumb: "thumbnail 1.jpg",
          alt: "product 1",
        },
        {
          src: "image-2.jpg",
          thumb: "thumbnail 2.jpg",
          alt: "product 2",
        },
        {
          src: "image-3.jpg",
          thumb: "thumbnail 3.jpg",
          alt: "product 3",
        },
        {
          src: "image-4.jpg",
          thumb: "thumbnail 4.jpg",
          alt: "product 4",
        },
      ],
    },
    request: jest.fn(),
  }),
}));

describe("CartContex ", () => {
  beforeEach(async () => {
    renderProductAndCart();

    await userEvent.click(screen.getByRole("button", { name: "mais" }));
    await userEvent.click(screen.getByRole("button", { name: /add to cart/i }));
    await userEvent.click(screen.getByRole("button", { name: "1" }));
  });

  it("should add item to cart when there is item selected", async () => {
    expect.assertions(3);
    expect(screen.getByRole("region", { name: "modal carrinho de compras" })).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  it("should clear cart when checkout button clicked", async () => {
    expect.assertions(2);
    expect(screen.getByRole("region", { name: "modal carrinho de compras" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /finalizar compra/i }));

    expect(screen.getByText(/your cart is empty\./i)).toBeInTheDocument();
  });

  it("should update cart item", async () => {
    expect.assertions(4);
    expect(screen.getByTestId("total-price")).toHaveTextContent("$5.00");
    expect(screen.getByText("$5.00 x 1")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "mais" }));
    await userEvent.click(screen.getByRole("button", { name: /add to cart/i }));
    await userEvent.click(screen.getByRole("button", { name: "2" }));

    expect(screen.getByTestId("total-price")).toHaveTextContent("$10.00");
    expect(screen.getByText("$5.00 x 2")).toBeInTheDocument();
  });

  it("should remove item when trash button clicked", async () => {
    expect.assertions(3);
    expect(screen.getByRole("region", { name: "modal carrinho de compras" })).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /deletar item/i }));

    expect(screen.getByText(/your cart is empty\./i)).toBeInTheDocument();
    expect(screen.queryByTestId("cart-detail")).not.toBeInTheDocument();
  });

  it("should return default state when unhandled action is dispatched", () => {
    const initialState = { items: [] };
    const newItem = { product: { id: "1", name: "Test Product" } };

    const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;
    const { result } = renderHook(() => useContext(CartContext), { wrapper });

    waitFor(
      async () =>
        await act(
          async () =>
            await result.current.cartDispatch({
              type: "UNKNOWN",
              payload: newItem,
            })
        )
    );

    expect(result.current.cartState).toEqual(initialState);
  });
});

describe("CartContext", () => {
  it("shouldn't add item to cart when there is no item selected", async () => {
    renderProductAndCart();
    const regionShoppingCart = screen.getByRole("region", {
      name: "carrinho de compras",
    });
    const cartButton = within(regionShoppingCart).getByRole("button");

    await userEvent.click(cartButton);

    expect.assertions(5);
    expect(
      screen.getByRole("region", { name: "modal carrinho de compras" })
    ).toBeInTheDocument();
    expect(screen.getByText(/your cart is empty\./i)).toBeInTheDocument();

    expect(screen.getByTestId("counter")).toHaveTextContent("0");

    await userEvent.click(screen.getByRole("button", { name: /add to cart/i }));
    await userEvent.click(cartButton);

    expect(screen.getByRole("region", { name: "modal carrinho de compras" })).toBeInTheDocument();
    expect(screen.getByText(/your cart is empty\./i)).toBeInTheDocument();
  });
});
