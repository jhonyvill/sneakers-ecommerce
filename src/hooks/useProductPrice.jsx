import React from "react";

export const useProductPrice = (initialPrice, discount) => {
  const discountPercent = discount * 100;
  const price = initialPrice.toFixed(2);
  const discountValue = price * discount;
  const finalPrice = (price - discountValue).toFixed(2);
  const hasDiscount = discountPercent > 0;

  function getTotalItemPrice(quantity) {
    return (finalPrice * quantity).toFixed(2);
  }

  return { price, finalPrice, discountPercent, hasDiscount, getTotalItemPrice };
};
