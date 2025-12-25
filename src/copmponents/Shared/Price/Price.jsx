import React from "react";
import s from "./Price.module.css";

export const Price = ({ price }) => {
  return <div className={s.price}>$ {price} USD</div>;
};
