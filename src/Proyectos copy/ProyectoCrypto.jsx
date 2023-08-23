import "./Proyectos.css"

import BannerProyecto from "./BannerProyecto/BannerProyecto"
import { PrimeraImagen } from "./PrimeraImagen/PrimeraImagen"
import { useEffect } from "react";

const ProyectoCrypto = () => {
     useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return (
    <div>
      <BannerProyecto />
      <PrimeraImagen />
    </div>
  )
}

export default ProyectoCrypto