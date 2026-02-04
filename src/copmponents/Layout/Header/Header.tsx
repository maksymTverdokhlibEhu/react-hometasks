import { LogoIcon } from "../../Icons/Icons";
import { LanguageSwitcher } from "../../Shared/LanguageSwitcher/LanguageSwitcher";
import { Cart } from "../Cart/Cart";
import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";
import classNames from "classnames";

export const Header = () => {
  return (
    <header className={classNames("container", styles.header)}>
      <LogoIcon />
      <div className={styles.header__right}>
        <LanguageSwitcher />
        <Navigation />
        <Cart />
      </div>
    </header>
  );
};
