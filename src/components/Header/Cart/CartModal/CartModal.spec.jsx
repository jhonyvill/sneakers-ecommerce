import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme, itemDefault } from "../../../../../.jest/utils";
import { CartContext } from "../../../../contexts/CartContext";
import CartModal from ".";

function renderCartModal(cartRef, isModalOpen, handleCheckout, hasItems) {
  return renderWithTheme(
    <CartContext.Provider
      value={{ cartState: { items: [itemDefault, itemDefault] } }}
    >
      <CartModal
        cartRef={cartRef}
        isModalOpen={isModalOpen}
        handleCheckout={handleCheckout}
        hasItems={hasItems}
      />
    </CartContext.Provider>
  );
}

describe("<CartModal />", () => {
  it("should render CartModal component empty", () => {
    renderCartModal({}, jest.fn(), jest.fn(), false);

    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
    expect(screen.getByText(/your cart is empty\./i)).toBeInTheDocument();
  });

  it("should render CartModal component with item", () => {
    renderCartModal({}, jest.fn(), jest.fn(), true);

    const checkoutButton = screen.getByRole("button", { name: /finalizar compra/i });

    expect(checkoutButton).toBeInTheDocument();
    expect(checkoutButton).toHaveTextContent("Checkout");
    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("should close modal when different ref element clicked", async () => {
    const isModalOpenMock = jest.fn();
    const outsideElement = document.createElement("div");

    renderCartModal(
      { current: document.createElement("div") },
      isModalOpenMock,
      jest.fn(),
      false
    );
    document.body.appendChild(outsideElement);

    expect.assertions(3);
    await userEvent.click(outsideElement);
    expect(isModalOpenMock).toHaveBeenCalled();
    expect(isModalOpenMock).toHaveBeenCalledTimes(1);
    expect(isModalOpenMock).toHaveBeenCalledWith(false);
    outsideElement.remove();
  });
  it("shouldn't close modal when ref element clicked", async () => {
    const isModalOpenMock = jest.fn();
    const outsideElement = document.createElement("div");
    const elementRef = document.createElement("div");
    outsideElement.appendChild(elementRef);

    renderCartModal(
      { current: outsideElement },
      isModalOpenMock,
      jest.fn(),
      false
    );
    document.body.appendChild(outsideElement);

    expect.assertions(1);
    await userEvent.click(elementRef);
    expect(isModalOpenMock).not.toHaveBeenCalled();
    outsideElement.remove();
  });

  it("should call checkout function", async () => {
    const handleCheckoutMock = jest.fn();
    renderCartModal(
      { current: document.createElement("div") },
      jest.fn(),
      handleCheckoutMock,
      true
    );

    const checkoutButton = screen.getByRole("button", { name: /finalizar compra/i });

    expect.assertions(1);
    await userEvent.click(checkoutButton);
    expect(handleCheckoutMock).toHaveBeenCalledTimes(1);
  });

});

describe("<CartModal /> snapshots", () => {
  it("should match snapshot", () => {
    const {container} = renderCartModal({}, jest.fn(), jest.fn(), true);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should match snapshot when cart is empty", () => {
    const {container} = renderCartModal({}, jest.fn(), jest.fn(), false);
    expect(container.firstChild).toMatchSnapshot();
  });
});
