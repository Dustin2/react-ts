export const Basictypes = () => {
  //si no queremos que infiera podemos agregar los valores que puede aceptar esa variable
  let name: string | number = "Dustin";
  const age: number = 35;
  const isActive: boolean = true;

  const items: string[] = ["sisors,papers, pencils, book"];

  // para decir que un arreglo sera de tipo X se debera poner como en el emjempo anterior,  const nombre: tipo[] = []
  //typescript infiere de que tipos son las variables dependiendo del contenido
  return (
    <>
      <h1>types basics</h1>
      {name},{age},{isActive ? "active" : "is not active"}
      {items.join(", ")}
    </>
  );
};
