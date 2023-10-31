import React from "react";
import * as S from "./styles";
import CartSvg from "../../../assets/icon-cart.svg?react";
import { useState } from "react";
import CartModal from "./CartModal";
import { useRef } from "react";

const Cart = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const cartRef = useRef(null);

  function handleCartModal() {
    setIsCartModalOpen(!isCartModalOpen);
  }

  return (
    <div ref={cartRef}>
      <S.Cart
        aria-label="carrinho de compras"
        aria-expanded={isCartModalOpen}
        onClick={handleCartModal}
      >
        <CartSvg />
      </S.Cart>
      {isCartModalOpen && (
        <CartModal
          cartRef={cartRef}
          closeCartModal={() => setIsCartModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Cart;
