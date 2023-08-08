import { createContext, useState } from "react";

export const ProyectoElegidoContext = createContext();


export const ProyectoElegidoProvider = ({ children }) => {
  const [proyectoElegido, setProyectoElegido] = useState();

  return (
    <ProyectoElegidoContext.Provider value={{ proyectoElegido, setProyectoElegido }}>
      {children}
    </ProyectoElegidoContext.Provider>
  );
};