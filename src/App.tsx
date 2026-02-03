import React from "react";
import { Header } from "./copmponents/Layout/Header/Header.jsx";
import { Footer } from "./copmponents/Layout/Footer/Footer.jsx";
import { Router } from "./lib/router/router.jsx";
import { CartProvider } from "./lib/providers/CartProvider.jsx";

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
