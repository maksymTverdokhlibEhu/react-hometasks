import React from "react";
export const CartContext = React.createContext({});

export const useCart = () => {
  return React.useContext(CartContext);
};
