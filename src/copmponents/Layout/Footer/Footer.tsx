import classNames from "classnames";
import { LogoIcon, Winds } from "../../Icons/Icons";
import styles from "./Footer.module.css";
import {
  InstagramIcon,
  TwitterIcon,
  YotubeIcon,
} from "../../Icons/SocialIcons";
import { Link } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.footerWrapper}>
      <footer className={classNames("container", styles.footer)}>
        <Winds style={{ position: "absolute", bottom: 0, left: 0 }} />
        <div className={styles.firstRow}>
          <div>
            <LogoIcon />
            <p className={styles.link}>
              <Trans
                t={t}
                i18nKey="footer.tagline"
                components={{ br: <br /> }}
              />
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.groupTitle}>
              {t("footer.columns.company")}
            </div>
            <div>{t("navigation.home")}</div>
            <div>{t("navigation.order")}</div>
            <div>{t("footer.links.faq")}</div>
            <div>{t("footer.links.contact")}</div>
          </div>
          <div className={styles.col}>
            <div className={styles.groupTitle}>
              {t("footer.columns.template")}
            </div>
            <Link to="#">{t("footer.links.styleGuide")}</Link>
            <Link to="#">{t("footer.links.changelog")}</Link>
            <Link to="#">{t("footer.links.licence")}</Link>
            <Link to="#">{t("footer.links.webflow")}</Link>
          </div>
          <div className={styles.col}>
            <div className={styles.groupTitle}>
              {t("footer.columns.flowbase")}
            </div>
            <div>{t("footer.links.more")}</div>
          </div>
          <div className={styles.footerLine}></div>
        </div>
        <div className={styles.secondRow}>
          <div>
            <p>
              <span>{t("footer.builtBy")}</span>{" "}
              <span className={styles.green}>Flowbase</span>{" "}
              <span>· {t("footer.poweredBy")}</span>{" "}
              <span className={styles.green}>Webflow</span>
            </p>
          </div>
          <div>
            <div className={styles.icon}>
              <InstagramIcon />
            </div>
            <div className={styles.icon}>
              <TwitterIcon />
            </div>
            <div className={styles.icon}>
              <YotubeIcon />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
