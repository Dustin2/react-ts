import { useCounter } from "../hooks/useCounter";

export const CounterHook = () => {
  const { addvalue, value } = useCounter(12);
  return (
    <>
      <h3>
        Counter:<small>{value}</small>{" "}
      </h3>

      <button onClick={() => addvalue(1)}>+1</button>

      <button onClick={() => addvalue(-1)}>-1</button>
    </>
  );
};
