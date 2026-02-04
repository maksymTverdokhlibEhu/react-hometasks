import React, { useEffect, useState } from "react";
import s from "./ThemeSwitch.module.css";
import { useTranslation } from "react-i18next";

type Theme = "light" | "dark";

export const ThemeSwitcher: React.FC = () => {
  const { t } = useTranslation();

  const getSystemTheme = (): Theme =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    return saved ?? getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={s.container}>
      <span className={s.label}>{t("navigation.theme")}:</span>
      <button
        className={`${s.button} ${theme === "light" ? s.active : ""}`}
        onClick={() => setTheme("light")}
      >
        Light
      </button>
      <button
        className={`${s.button} ${theme === "dark" ? s.active : ""}`}
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
};
