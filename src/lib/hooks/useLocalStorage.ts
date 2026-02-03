import { useState } from "react";
import { isJSON } from "../helpers/isJson.js";

type StorageValue = string | number | boolean | object | null;

export const useLocalStorage = <T = StorageValue>(key?: string) => {
  const [value, setValue] = useState<T | string | null>(() => {
    if (!key) return null;
    return localStorage.getItem(key);
  });

  const setItem = (paramKey?: string, newValue?: T) => {
    const storageKey = paramKey ?? key;
    if (!storageKey) return;

    const storedValue =
      typeof newValue === "string" ? newValue : JSON.stringify(newValue);

    localStorage.setItem(storageKey, storedValue);
    setValue(newValue ?? null);
  };

  const getItem = (paramKey?: string): T | string | undefined => {
    const storageKey = paramKey ?? key;
    if (!storageKey) return undefined;

    const item = localStorage.getItem(storageKey);
    if (!item) return undefined;

    return isJSON(item) ? (JSON.parse(item) as T) : item;
  };

  const removeItem = (paramKey?: string) => {
    const storageKey = paramKey ?? key;
    if (!storageKey) return;

    localStorage.removeItem(storageKey);
    setValue(null);
  };

  return { value, setItem, getItem, removeItem };
};
