import { Button } from "../../ui/button/button";
import { CartIcon } from "../../Icons/Icons";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { allProductsCountSelector } from "../../../lib/state/selectors/cart.selectors";

export const Cart = () => {
  const allProductsCount = useSelector(allProductsCountSelector);
  return (
    <div className={styles.cart}>
      <Button
        width="55px"
        height="55px"
        icon={<CartIcon width={25} height={17} />}
      />
      <span className={styles.count}>{allProductsCount}</span>
    </div>
  );
};
