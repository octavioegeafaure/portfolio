import "./Proyecto.css"
import { motion, useAnimation, useInView } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ProyectoElegidoContext } from "../../Context/ProyectoElegidoContext";

const Proyecto = ({index, titulo, setModal}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true })
    const mainControls = useAnimation()
    const { proyectoElegido, setProyectoElegido } = useContext(ProyectoElegidoContext);


    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    },[isInView]) 
  return (
    
      <div className="proyecto-container-linea">
        <Link 
        onClick={() => {
        // setProyectoElegido(titulo);
        localStorage.setItem('titulo', titulo)
        {console.log(localStorage.getItem('titulo'))}
        }}
        to={`/portfolio/proyectos`}
        
        >
            <div 
                onMouseEnter={() => {setModal({active: true, index})}} 
                onMouseLeave={() => {setModal({active: false, index})}} 
                className="proyecto">
                <h4>{titulo}</h4>
            </div>
        </Link>
      </div>

  )
}

export default Proyecto