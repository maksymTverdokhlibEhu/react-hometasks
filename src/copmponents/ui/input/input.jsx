import React from "react";
import s from "./input.module.css";
import classNames from "classnames";

export const Input = React.memo(
  ({
    name,
    value,
    type = "text",
    placeholder,
    handleChange,
    size = "xl",
    label = "",
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
        />
      </div>
    );
  }
);
