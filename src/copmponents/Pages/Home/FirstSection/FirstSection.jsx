import classNames from "classnames";
import styles from "./FirstSection.module.css";
import { Button } from "../../../ui/button/button";
import { TrustpilotIcon } from "../../../Icons/Icons";

export const FirstSection = () => {
  return (
    <div className={classNames("container", styles.section)}>
      <div>
        <h1>
          Beautiful food & takeaway,{" "}
          <span className={styles.green}> delivered </span> to your door.
        </h1>
        <p className={classNames("b3-reg", styles.description)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500.
        </p>
        <Button
          style={{ marginTop: "60px" }}
          width="193px"
          height="60px"
          text="Place an Order"
        />
        <TrustpilotIcon style={{ marginTop: "30px" }} />
        <p className={classNames("b3-reg", styles.description)}>
          <span className={styles.green}>4.8 out of 5</span>{" "}
          <span>based on 2000+ reviews</span>
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
