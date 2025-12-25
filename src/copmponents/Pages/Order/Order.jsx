import classNames from "classnames";
import s from "./index.module.css";
import { OrderList } from "./OrderList";
import { Form } from "./Form";

export const Order = () => {
  return (
    <div className={s["orderPage"]}>
      <div className={classNames("container")}>
        <h1>Finish your order</h1>
        <OrderList />
        <Form />
      </div>
    </div>
  );
};
