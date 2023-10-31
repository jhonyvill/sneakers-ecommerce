import React from "react";
import { useReducer } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const initialState = { items: [] };

  function cartReducer(state, action) {
    switch (action.type) {
      case "ADD_ITEM":
        return { ...state, items: [...state.items, action.payload] };
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
