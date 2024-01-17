// las interfaces en ts sirven para decirle a ts como seran nuestros objetos




export const LiteralObjects = () => {
  const person = {
    name: "dustin",
    age: 24,
    adress: {
      country: " mexico",
      houseNumber: 3242,
    },
  };
  return (
    <>
      <h2>Literal Objects</h2>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};
