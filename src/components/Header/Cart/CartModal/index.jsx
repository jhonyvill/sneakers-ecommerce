import * as S from "./styles";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import CartItem from "./CartItem";
import Button from "../../../Utils/Button";

const CartModal = ({ cartRef, closeCartModal }) => {
  const { cartState } = useContext(CartContext);
  const { cartHasItems } = useCart();

  function handleClickOutside(event) {
    if (!cartRef.current.contains(event.target)) closeCartModal();
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <S.Modal>
      <S.Title>
        <h2>Cart</h2>
      </S.Title>
      <S.Content>
        {cartHasItems ? (
          <>
            <S.Items>
              {cartState.items.map((item, index) => (
                <li key={index}>
                  <CartItem item={item} />
                </li>
              ))}
            </S.Items>
            <Button>Checkout</Button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </S.Content>
    </S.Modal>
  );
};

export default CartModal;
