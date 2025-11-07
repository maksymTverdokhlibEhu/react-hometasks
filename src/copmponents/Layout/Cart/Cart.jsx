import { Button } from "../../ui/button/button";
import { CartIcon } from "../../Icons/Icons";
import styles from "./Cart.module.css";
import { useCart } from "../../../lib/hooks/useCart";

export const Cart = () => {
  const { count } = useCart();

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
