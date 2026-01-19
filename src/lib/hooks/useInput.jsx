import { useCallback, useState } from "react";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback((eOrValue) => {
    setValue(eOrValue ? eOrValue.target.value : "");
  }, []);

  return [value, handleChange];
};
