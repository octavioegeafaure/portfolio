import "./PrimeraImagen.css"
import { motion, useAnimation, useInView } from "framer-motion"
import imagenCrypto from "./Images/GoCrypto/primeraImagen.png"
import imagenCrypto2 from "./Images/GoCrypto/dashboard.png"
import imagenCrypto3 from "./Images/GoCrypto/dashboardCompleto.png"
import imagenCrypto4 from "./Images/GoCrypto/cuadroMonedas.png"
import imagenEasy from "./Images/EasyRides/easyrides.png"
import imagenEasy2 from "./Images/EasyRides/detalleAuto.png"
import imagenEasy3 from "./Images/EasyRides/detalleAuto2.png"
import imagenEasy4 from "./Images/EasyRides/detalleAuto3.png"
import imagenEasy5 from "./Images/EasyRides/reservaAuto.png"
import { useContext, useEffect, useRef } from "react"
import { ProyectoElegidoContext } from "../../Context/ProyectoElegidoContext"
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom";

export const PrimeraImagen = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true })
    const mainControls = useAnimation()
    const { proyectoElegido } = useContext(ProyectoElegidoContext);
    useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
    },[isInView])
    useEffect(() => {
     window.scrollTo(0, 0);
    }, []);
  return (
    <div
      className='primera-imagen'
    >
      <motion.div
      initial={{ y: 250 }}
      animate={{ y: 50 }}
      transition={{
        ease: "easeInOut",
        duration: 1.2,
        delay: 1.3,
      }}
      >
        <img className='primera-imagen-img' src={imagenEasy}/>
      </motion.div>

      <motion.div 
      
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 1.2,
        delay: 1,
      }} 
    
      className="concepto">
        
          <>
          <div ref={ref} className="concepto-flex">
          <p className="concepto-concepto">Concepto</p>
          <p 
          className="concepto-info">
          EasyRides que permite realizar reservas de autos. Estos estan divididos y permiten filtrarse
          por categoria, ciudad y fecha. Cada vehiculo tiene su pagina de detalle con imagenes y descripciones
          del vehiculo. Toda esta informacion se encuentra cargada en el BackEnd y se provee mediante APIs. 
          </p>
          </div>
          <img className='primera-imagen-img' src={imagenEasy2}/>
          <img className='primera-imagen-img' src={imagenEasy3}/>
          <img className='primera-imagen-img' src={imagenEasy4}/>
          <img className='primera-imagen-img' src={imagenEasy5}/>
        <div className="boton-proyecto">
          <p>siguiente proyecto</p>
          <Link
          onClick={() => {
            
          // setProyectoElegido(titulo);
          localStorage.setItem('titulo', "GoCrypto")
          // window.location.reload()
          }}
          
          to={`/portfolio/proyectos/GoCrypto`}
          >
            <div className="boton-proyecto-proyecto">
              <h5>gocrypto</h5>
            </div>
          </Link>
        </div>
        </>

       
      </motion.div>
    </div>
  )
}
