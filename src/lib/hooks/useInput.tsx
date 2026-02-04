import { useCallback, useState } from "react";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (eOrValue: React.ChangeEvent<HTMLInputElement> | string) => {
      if (typeof eOrValue === 'string'){
        setValue(eOrValue);
      } else {
        setValue(eOrValue.target.value);
      }
    },
    [],
  );

  return [value, handleChange] as const;
};
