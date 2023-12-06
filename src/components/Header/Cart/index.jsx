import React, { useRef, useState } from "react";
import * as S from "./styles";
import CartSvg from "../../../assets/icon-cart.svg?react";
import CartModal from "./CartModal";
import { useCart } from "../../../hooks/useCart";

const Cart = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const cartRef = useRef(null);
  const { totalQuantityItemsCart, cartHasItems, clearCart } = useCart();

  function handleCartModal() {
    setIsCartModalOpen(!isCartModalOpen);
  }

  return (
    <section ref={cartRef} aria-label="carrinho de compras">
      <S.Cart
        aria-expanded={isCartModalOpen}
        onClick={handleCartModal}
      >
        <CartSvg data-testid="cart-svg"/>
        {cartHasItems && (
          <S.CartDetail data-testid="cart-detail">{totalQuantityItemsCart}</S.CartDetail>
        )}
      </S.Cart>
      {isCartModalOpen && (
        <CartModal
          cartRef={cartRef}
          isModalOpen={setIsCartModalOpen}
          handleCheckout={clearCart}
          hasItems={cartHasItems}
        />
      )}
    </section>
  );
};

export default Cart;
