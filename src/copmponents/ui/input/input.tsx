import React from "react";
import s from "./input.module.css";
import classNames from "classnames";

// @ts-ignore
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  size?: "xl" | "lg" | "md" | "sm";
}

export const Input: React.FC<InputProps> = React.memo(
  ({
    name,
    value,
    type = "text",
    placeholder,
    handleChange,
    size = "xl",
    label = "",
    ...props
  }) => {
    return (
      <div className={s.inputWrapper}>
        <label>{label}</label>
        <input
          className={classNames(s.input, {
            [s.xl]: size === "xl",
          })}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  },
);
