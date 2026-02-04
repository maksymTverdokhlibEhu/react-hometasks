import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { routes } from "../../../lib/const/routes";
import { ThemeSwitcher } from "../../Shared/ThemeSwitch/ThemeSwitch";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ThemeSwitcher />
      {routes.map((route) => (
        <Link
          className={classNames("b3-reg", styles.link, {
            [styles.active]: location.pathname === route.path,
          })}
          key={route.path}
          to={route.path}
        >
          {route.title}
        </Link>
      ))}
    </nav>
  );
};
