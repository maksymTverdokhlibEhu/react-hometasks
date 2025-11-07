import React from "react";
import { List } from "./copmponents/List/List";
import { Header } from "./copmponents/Layout/Header/Header";
import { Footer } from "./copmponents/Layout/Footer/Footer";
import { Router } from "./lib/router/router";
import { CartProvider } from "./lib/providers/CartProvider";

export const App = () => {
  return (
    <CartProvider>
      <Header />
      <Router />
      <Footer />
    </CartProvider>
  );
};

export default App;
