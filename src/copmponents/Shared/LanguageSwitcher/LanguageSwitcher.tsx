import { useTranslation } from "react-i18next";
import { useState } from "react";
import s from "./LanguageSwitcher.module.css";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const setLang = (lang: "en" | "ru" | "pl") => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <button className={s.trigger} onClick={() => setOpen(!open)}>
        {i18n.language.toUpperCase()} ▾
      </button>

      {open && (
        <div className={s.dropdown}>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("ru")}>RU</button>
          <button onClick={() => setLang("pl")}>PL</button>
        </div>
      )}
    </div>
  );
};
