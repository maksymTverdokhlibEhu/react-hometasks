import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({
  width = "100px",
  height = "100px",
  text = "Text",
  icon = false,
  padding = null,
  style = null,
}) => {
  return (
    <button
      style={{
        width,
        height,
        ...(padding && { padding }),
        ...(style && style),
      }}
      className={classNames("b3-reg", styles.button)}
    >
      {icon ? icon : text}
    </button>
  );
};
