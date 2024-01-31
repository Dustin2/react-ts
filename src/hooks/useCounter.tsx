//creamos un custom hook utilizando como base el componente counter extraemos el use state y la funcion que hace el incremento

//declaramos un estado inicial, esto lo hacemos cuando queremos dejar un valor por defecto en caso de que nuestro (custom hook) no reciba ningun parametro

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
