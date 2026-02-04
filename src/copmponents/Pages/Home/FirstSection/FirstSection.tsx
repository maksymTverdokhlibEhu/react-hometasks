import classNames from "classnames";
import styles from "./FirstSection.module.css";
import { Button } from "../../../ui/button/button";
import { TrustpilotIcon } from "../../../Icons/Icons";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

export const FirstSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={classNames("container", styles.section)}>
      <div>
        <h1>
          <Trans
            t={t}
            i18nKey="hero.title"
            components={{ delivered: <span className={styles.green} /> }}
          />
        </h1>
        <p className={classNames("b3-reg", styles.description)}>
          {t("hero.description")}
        </p>
        <Button
          onClick={() => navigate("/order")}
          style={{ marginTop: "60px" }}
          width="193px"
          height="60px"
        >
          {t("hero.cta")}
        </Button>
        <TrustpilotIcon
          style={{ marginTop: "30px", color: "var(--text-primary)" }}
        />
        <p className={classNames("b3-reg", styles.description)}>
          <Trans
            t={t}
            i18nKey="hero.trustpilot"
            components={{
              rating: <span className={styles.green} />,
              text: <span className={styles.descriptionReview} />,
            }}
          />
        </p>
      </div>
      <div>
        <div className={styles.imageContainer}>
          <img src="/images/pages/mainPage/first-section.png" alt="" />
        </div>
      </div>
    </div>
  );
};
