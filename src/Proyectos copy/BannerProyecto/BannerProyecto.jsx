import "./BannerProyecto.css";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { ProyectoElegidoContext } from "../../Context/ProyectoElegidoContext";

const BannnerProyecto = () => {
  const { proyectoElegido } = useContext(ProyectoElegidoContext);
      useEffect(() => {
     window.scrollTo(0, 0);
    }, []);
  return (
    <div className="proyectos">
        <div className="proyectos-titulo-container" >
          <motion.h3
          initial={{ y: 140 }}
          animate={{ y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.6,
          }}
          className="proyectos-titulo"
          >
          gocrypto
          </motion.h3>
        </div>
          <div className="proyectos-subtitulo">
          <motion.h4 
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{
            ease: "easeInOut",
            duration: 1.2,
            delay: 1.2,
          }}
          >
            {/* Web de seguimiento de criptomonedas.  */}
          </motion.h4>
        </div>
    </div>
  );
};

export default BannnerProyecto;
