import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [quantitySelected, setQuantitySelected] = useState(0);
  const cartHasItems = cartState.items.length > 0;

  function addCartProduct(data) {
    if (quantitySelected > 0) {
      cartDispatch({
        type: "ADD_ITEM",
        payload: { product: data, quantity: quantitySelected },
      });
    }
    setQuantitySelected(0);
  }

  
  return {
    quantitySelected,
    setQuantitySelected,
    addCartProduct,
    cartHasItems
  };
};
