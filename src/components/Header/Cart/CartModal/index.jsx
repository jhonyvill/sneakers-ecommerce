import { useEffect } from "react";
import * as S from "./styles";

const CartModal = ({ cartRef, closeCartModal }) => {
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
        <p>Your cart is empty.</p>
      </S.Content>
    </S.Modal>
  );
};

export default CartModal;
