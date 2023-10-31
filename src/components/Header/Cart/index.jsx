import React, { useRef, useState } from "react";
import * as S from "./styles";
import CartSvg from "../../../assets/icon-cart.svg?react";
import CartModal from "./CartModal";
import { useCart } from "../../../hooks/useCart";

const Cart = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const cartRef = useRef(null);
  const { totalQuantityItemsCart, cartHasItems } = useCart();

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
        {cartHasItems && (
          <S.CartDetail>{totalQuantityItemsCart}</S.CartDetail>
        )}
      </S.Cart>
      {isCartModalOpen && (
        <CartModal
          cartRef={cartRef}
          closeCartModal={() => setIsCartModalOpen(false)}
          hasItems={cartHasItems}
        />
      )}
    </div>
  );
};

export default Cart;
