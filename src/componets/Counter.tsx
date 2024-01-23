import { useState } from "react";
export const Counter = () => {
  const [value, setValue] = useState(0);

  const addvalue = (number: number) => {
    setValue(value + number);
  };
  return (
    <>
      <small>{value}</small>
      <h3>Counter </h3>

      <button onClick={() => addvalue(1)}>+1</button>

      <button onClick={() => addvalue(-1)}>-1</button>
    </>
  );
};
