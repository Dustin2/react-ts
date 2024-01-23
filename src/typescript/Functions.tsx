export const Functions = () => {
  const add = (firstNumber: number, secondNumber: number): number => {
    return firstNumber + secondNumber;
  };
  return (
    <>
      <h3>Functions</h3>
      <span>result is:{ add(2,5) } </span>
    </>
  );
};
