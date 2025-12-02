import { useState } from "react";
import { isJSON } from "../helpers/isJson";

export const useLocalStorage = (key) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key);
  });

  const setItem = (paramKey, value) => {
    localStorage.setItem(
      paramKey || key,
      typeof value !== "string" ? JSON.stringify(value) : value
    );
    setValue(value);
  };

  const getItem = (paramKey) => {
    const item = localStorage.getItem(paramKey || key);
    if (!item) {
      return undefined;
    }
    return isJSON(item) ? JSON.parse(item) : item;
  };

  const removeItem = (paramKey) => {
    localStorage.removeItem(paramKey || key);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};
