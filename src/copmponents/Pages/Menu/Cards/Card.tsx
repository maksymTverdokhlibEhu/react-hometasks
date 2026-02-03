import s from "./Card.module.css";
import { Button } from "../../../ui/button/button";
import { useCart } from "../../../../lib/hooks/useCart";
import React from "react";
import { productCountSelector } from "../../../../lib/state/selectors/cart.selectors";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../lib/state/reducers/cart.reducer";
import type { CardType } from "./types";

export const Counter: React.FC<{ count: number }> = React.memo(({ count }) => {
  const { increment } = useCart();
  return (
    <div onClick={increment} className={s.counter}>
      {count}
    </div>
  );
});

Counter.displayName = "Counter";

export const Card: React.FC<CardType> = React.memo(
  ({ title, price, description, image, id }) => {
    const count = useSelector(productCountSelector(id));
    const dispatch = useDispatch();

    return (
      <div className={s.card}>
        <div className={s.image}>
          <img src={image} alt="" />
        </div>
        <div className={s.content}>
          <div className={s.row1}>
            <div className={s.title}>{title}</div>
            <div className={s.price}>$ {price} USD</div>
          </div>
          <div className={s.row2}>{description}</div>
          <div className={s.row3}>
            <Counter count={count} />
            <Button
              height="45px"
              width="auto"
              className={s.button}
              onClick={() =>
                dispatch(
                  addProduct({
                    title,
                    price,
                    description,
                    image,
                    id,
                  }),
                )
              }
            >
              Add to card
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

Card.displayName = "Card";
