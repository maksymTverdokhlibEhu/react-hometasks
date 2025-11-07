import classNames from "classnames";
import styles from "./button.module.css";

export const Button = ({
  width = "100px",
  height = "100px",
  variant = "primary",
  icon = false,
  padding = null,
  style = null,
  children,
  className,
  ...props
}) => {
  return (
    <button
      style={{
        width,
        height,
        ...(padding && { padding }),
        ...(style && style),
      }}
      className={classNames("b3-reg", styles.button, className && className, {
        [styles.primary]: variant === "primary",
        [styles.secondary]: variant === "secondary",
      })}
      {...props}
    >
      {icon ? icon : children}
    </button>
  );
};
