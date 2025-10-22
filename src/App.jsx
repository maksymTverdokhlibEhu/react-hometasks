import React from "react";
import { List } from "./copmponents/List/List";
import { Header } from "./copmponents/Layout/Header/Header";
import { Footer } from "./copmponents/Layout/Footer/Footer";
import { Router } from "./lib/router/router";

export const App = () => {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default App;
