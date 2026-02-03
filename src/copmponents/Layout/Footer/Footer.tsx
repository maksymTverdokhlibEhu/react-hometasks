import classNames from "classnames";
import { LogoIcon, Winds } from "../../Icons/Icons";
import styles from "./Footer.module.css";
import {
  InstagramIcon,
  TwitterIcon,
  YotubeIcon,
} from "../../Icons/SocialIcons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <footer className={classNames("container", styles.footer)}>
        <Winds style={{ position: "absolute", bottom: 0, left: 0 }} />
        <div className={styles.firstRow}>
          <div>
            <LogoIcon />
            <p className={styles.link}>
              Takeaway & Delivery template <br /> for small - medium businesses.
            </p>
          </div>
          <div className={styles.col}>
            <div className={styles.groupTitle}>COMPANY</div>
            <div>Home</div>
            <div>Order</div>
            <div>FAQ</div>
            <div>Contact</div>
          </div>
          <div className={styles.col}>
            <div className={styles.groupTitle}>TEMPLATE</div>
            <Link to="https://www.google.com/" target="_blank" rel="noopener noreferrer">Style Guide</Link>
            <Link to="https://www.google.com/" target="_blank" rel="noopener noreferrer">Changelog</Link>
            <Link to="https://www.google.com/" target="_blank" rel="noopener noreferrer">Licence</Link>
            <Link to="https://www.google.com/" target="_blank" rel="noopener noreferrer">Webflow University</Link>
          </div>
          <div className={styles.col}>
            <div className={styles.groupTitle}>FLOWBASE</div>
            <div>More Cloneables</div>
          </div>
          <div className={styles.footerLine}></div>
        </div>
        <div className={styles.secondRow}>
          <div>
            <p>
              <span>Built by</span>{" "}
              <span className={styles.green}>Flowbase</span>{" "}
              <span>· Powered by</span>{" "}
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
