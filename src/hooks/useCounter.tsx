import { useState } from "react";
export const useCounter = (inicial: number = 10) => {
  const [value, setValue] = useState(0);

  const addvalue = (number: number) => {
    setValue(value + number);
  };
  return {
    value,
    addvalue,
  };
};
