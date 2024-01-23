// las interfaces en ts sirven para decirle a ts como se veran nuestros objetos

// diferencias entre class,type, interface
// la clase existe en js
// la interface es mas facil de expandir que el type
//las interfaces funcionan solo para agregar reglas de validacion a los objetos
interface Person {
  allNames: string;
  age: Number;
  adress: Adress;
}
//cuando hay objetos dentro de objetos es recomendable ir creando interface para hacer mas mantenible  el codigo segun las necesidades

interface Adress {
  country: string;
  numberHouse: Number;
}
export const LiteralObjects = () => {
  const person: Person = {
    allNames: "dustin",
    age: 24,
    adress: {
      country: " mexico",
      numberHouse: 3242,
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
