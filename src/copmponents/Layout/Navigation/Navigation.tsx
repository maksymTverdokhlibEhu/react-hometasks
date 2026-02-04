import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
import { routes } from "../../../lib/const/routes";
import { ThemeSwitcher } from "../../Shared/ThemeSwitch/ThemeSwitch";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const location = useLocation();
  const { t } = useTranslation();

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
          {t(`navigation.${route.titleKey}`)}
        </Link>
      ))}
    </nav>
  );
};
