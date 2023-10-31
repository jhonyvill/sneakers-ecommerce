import React from 'react'
import * as S from './styles'
import TrashSvg from "../../../../../assets/icon-delete.svg?react";
import { useProductPrice } from '../../../../../hooks/useProductPrice';

const CartItem = ({item}) => {
  const {finalPrice, getTotalItemPrice} = useProductPrice(item.product);
  const totalItemPrice = getTotalItemPrice(item.quantity);

  return (
    <S.Item>
      <S.Photo src={item.product.pictures[0].thumb} alt={item.product.pictures[0].alt} width="176px" height="176px"/>
      <S.Title>{item.product.title}</S.Title>
      <S.PriceContainer>
        <span>{`$${finalPrice} x ${item.quantity}`}</span>
        <S.TotalPrice>${totalItemPrice}</S.TotalPrice>
      </S.PriceContainer>
      <S.DeleteButton>
        <TrashSvg />
      </S.DeleteButton>
    </S.Item>
  )
}

export default CartItem