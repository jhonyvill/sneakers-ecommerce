import React from "react";
import * as S from "./styles";
import TrashSvg from "../../../../../assets/icon-delete.svg?react";
import { useProductPrice } from "../../../../../hooks/useProductPrice";
import { useCart } from "../../../../../hooks/useCart";
import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  const { finalPrice, getTotalItemPrice } = useProductPrice(item.product);
  const totalItemPrice = getTotalItemPrice(item.quantity);
  const { removeCartProduct } = useCart();

  return (
    <S.Item>
      <S.Photo
        src={item.product.pictures[0].thumb}
        alt={item.product.pictures[0].alt}
        width="176px"
        height="176px"
      />
      <S.Title>{item.product.title}</S.Title>
      <S.PriceContainer>
        <span>{`$${finalPrice} x ${item.quantity}`}</span>
        <S.TotalPrice>${totalItemPrice}</S.TotalPrice>
      </S.PriceContainer>
      <S.DeleteButton
        onClick={() => removeCartProduct(item.product.id)}
        aria-label="deletar item"
      >
        <TrashSvg />
      </S.DeleteButton>
    </S.Item>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
