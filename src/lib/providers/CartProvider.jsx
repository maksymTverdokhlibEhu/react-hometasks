import React from "react";
import { CartContext } from "../hooks/useCart";

export const CartProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        increment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
