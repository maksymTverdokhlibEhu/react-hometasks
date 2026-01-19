import classNames from "classnames";
import styles from "./button.module.css";
import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string | number;
  height?: string | number;
  variant?: ButtonVariant;
  icon?: ReactNode | false;
  padding?: string | number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Button = ({
  width = "100px",
  height = "100px",
  variant = "primary",
  icon = false,
  padding,
  style,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      style={{
        width,
        height,
        ...(padding !== undefined && { padding }),
        ...(style && style),
      }}
      className={classNames(
        "b3-reg",
        styles.button,
        className,
        {
          [styles.primary]: variant === "primary",
          [styles.secondary]: variant === "secondary",
        }
      )}
      {...props}
    >
      {icon || children}
    </button>
  );
};
