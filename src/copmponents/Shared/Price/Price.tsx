import React from "react";
import s from "./Price.module.css";

interface PriceProps {
  price: string;
}

export const Price = ({ price }: PriceProps) => {
  return <div className={s.price}>$ {price} USD</div>;
};
