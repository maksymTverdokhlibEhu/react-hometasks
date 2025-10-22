import { Button } from "../../ui/button/button";
import { CartIcon } from "../../Icons/Icons";
import { useState } from "react";
import styles from "./Cart.module.css";

export const Cart = () => {
  const [count] = useState(0);
  return (
    <div className={styles.cart}>
      <Button
        width="55px"
        height="55px"
        icon={<CartIcon width={25} height={17} />}
      />
      <span className={styles.count}>{count}</span>
    </div>
  );
};
