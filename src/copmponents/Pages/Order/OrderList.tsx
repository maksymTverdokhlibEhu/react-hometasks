import React from "react";
import { useSelector } from "react-redux";
import { allProductsSortedSelector } from "../../../lib/state/selectors/cart.selectors";
import { OrderCard } from "./OrderCard";
import s from "./index.module.css";

export const OrderList = () => {
  const orders = useSelector(allProductsSortedSelector);
  return (
    <div className={s.orderList}>
      {orders.map((order) => (
        <OrderCard
          id={order.id}
          key={order.id}
          title={order.title}
          price={order.price}
          image={order.image}
        />
      ))}
    </div>
  );
};
