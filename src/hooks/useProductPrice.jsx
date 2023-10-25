import React from "react";

export const useProductPrice = (product) => {
  const discountPercent = product.discount * 100;
  const price = product.price.toFixed(2);
  const discountValue = price * product.discount;
  const finalPrice = (price - discountValue).toFixed(2);
  const hasDiscount = discountPercent > 0;

  function getTotalItemPrice(quantity) {
    return (finalPrice * quantity).toFixed(2);
  }

  return { price, finalPrice, discountPercent, hasDiscount, getTotalItemPrice };
};
