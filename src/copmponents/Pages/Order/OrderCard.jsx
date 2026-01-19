import React from "react";
import s from "./index.module.css";
import { Counter } from "../Menu/Cards/Card";
import { Button } from "../../ui/button/button";
import { Price } from "../../Shared/Price/Price";
import { useSelector } from "react-redux";
import { productCountSelector } from "../../../lib/state/selectors/cart.selectors";
import { removeProduct } from "../../../lib/state/reducers/cart.reducer";
import { useDispatch } from "react-redux";

export const OrderCard = ({ title, price, image, id }) => {
  const count = useSelector(productCountSelector(id));
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeProduct(id));
  };

  return (
    <div className={s.orderCard}>
      <div className={s.col1}>
        <div className={s.image}>
          <img src={image} alt="" />
        </div>
        <div className={s.title}>{title}</div>
      </div>
      <div className={s.col2}>
        <div style={{ marginRight: "57px" }} className={s.price}>
          <Price price={price} />
        </div>
        <div className={s.counter}>
          <Counter count={count} />
        </div>
        <Button
          onClick={remove}
          style={{ marginLeft: "34px" }}
          width="60px"
          height="45px"
        >
          X
        </Button>
      </div>
    </div>
  );
};
