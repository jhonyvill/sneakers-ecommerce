import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const useCart = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const [quantitySelected, setQuantitySelected] = useState(0);
  const cartHasItems = cartState.items.length > 0;

  function findProductInCart(product) {
    return cartState.items.find((item) => item.product.id === product.id);
  }

  function addCartProduct(product) {
    const existentProduct = findProductInCart(product);
    if (existentProduct) {
      cartDispatch({
        type: "UPDATE_ITEM",
        payload: {
          product,
          quantity: (existentProduct.quantity += quantitySelected),
        },
      });
    } else if (quantitySelected > 0) {
      cartDispatch({
        type: "ADD_ITEM",
        payload: { product, quantity: quantitySelected },
      });
    }
    setQuantitySelected(0);
  }

  function removeCartProduct(id) {
    cartHasItems && cartDispatch({ type: "DELETE_ITEM", payload: { id } });
  }

  function getTotalQuantityOfCartItems(){
    return cartState.items.reduce((accumulator, item) => {
      return (accumulator += item.quantity);
    }, 0);
  }

  return {
    quantitySelected,
    setQuantitySelected,
    addCartProduct,
    removeCartProduct,
    cartHasItems,
    totalQuantityItemsCart: getTotalQuantityOfCartItems()
  };
};
