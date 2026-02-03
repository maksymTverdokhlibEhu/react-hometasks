import React from "react";

type CartContextType = {
  count: number;
  increment: () => void;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export const CartContext = React.createContext<CartContextType>(
  {} as CartContextType,
);

export const useCart = () => {
  return React.useContext(CartContext);
};
