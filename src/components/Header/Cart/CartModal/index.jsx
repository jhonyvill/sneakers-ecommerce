import * as S from "./styles";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import Button from "../../../Utils/Button";

const CartModal = ({ cartRef, isModalOpen, handleCheckout, hasItems }) => {
  const { cartState } = useContext(CartContext);

  function handleClickOutside(event) {
    if (!cartRef.current.contains(event.target)) isModalOpen(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.Modal aria-label="modal carrinho de compras">
      <S.Title>
        <h2>Cart</h2>
      </S.Title>
      <S.Content>
        {hasItems ? (
          <>
            <S.Items>
              {cartState.items.map((item, index) => (
                <li key={index}>
                  <CartItem item={item} />
                </li>
              ))}
            </S.Items>
            <Button aria-label="finalizar compra" onClick={handleCheckout}>Checkout</Button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </S.Content>
    </S.Modal>
  );
};

CartModal.propTypes = {
  cartRef: PropTypes.object,
  closeCartModal: PropTypes.func,
  handleCheckout: PropTypes.func,
  hasItems: PropTypes.bool
};

export default CartModal;
