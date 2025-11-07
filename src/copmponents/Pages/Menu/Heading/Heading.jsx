import classNames from "classnames";
import s from "./Heading.module.css";

export const Heading = () => {
    return (
      <>
        <div className={classNames("h1", s.title)}>Browse our menu</div>
        <div className={classNames("b3-reg", s.desc)}>
          Use our menu to place an order online, or{" "}
          <span className={s.green}> phone </span>our store to place a pickup
          order. Fast and fresh food.
        </div>
      </>
    );
  };
  