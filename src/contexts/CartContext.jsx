import React from "react";
import { useReducer } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const initialState = { items: [] };

  function cartReducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, items: [...state.items, action.payload] };
      case "UPDATE_ITEM":
        const { product } = action.payload;
        const itemIndex = state.items.findIndex(
          (item) => item.product.id === product.id
        );

        const updatedItems = [...state.items];
        updatedItems.slice(itemIndex, product);
        return { ...state, items: updatedItems };
      default:
        state;
    }
  }

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <CartContext.Provider
        value={{ cartState: state, cartDispatch: dispatch }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};
