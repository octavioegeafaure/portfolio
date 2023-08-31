import "./PrimeraImagen.css"
import { motion, useAnimation, useInView } from "framer-motion"
import imagenEasy from "./Images/EasyRides/easyrides.png"
import imagenEasy2 from "./Images/EasyRides/detalleAuto.png"
import imagenEasy3 from "./Images/EasyRides/detalleAuto2.png"
import imagenEasy4 from "./Images/EasyRides/detalleAuto3.png"
import imagenEasy5 from "./Images/EasyRides/reservaAuto.png"
import imagenCelu from "./Images/EasyRides/celuPrimero.png"
import imagenCelu2 from "./Images/EasyRides/celuSegundo.png"
import imagenCelu3 from "./Images/EasyRides/celuTercero.png"
import { useContext, useEffect, useRef } from "react"
import { ProyectoElegidoContext } from "../../Context/ProyectoElegidoContext"
import { Link } from "react-router-dom"
import { Navigate } from "react-router-dom";
import Footer from "../../Footer/Footer"

export const PrimeraImagen = () => {
    const ref = useRef(null)
    const mainControls = useAnimation()
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

      <div
      className="concepto">
        
          <>
          <div  className="concepto-flex">
          <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
          duration: 1,
          delay: 1,
          }} 
          viewport={{ once: true }}
          className="concepto-info">
          EasyRides que permite realizar reservas de autos. Estos estan divididos y permiten filtrarse
          por categoria, ciudad y fecha. Cada vehiculo tiene su pagina de detalle con imagenes y descripciones
          del vehiculo. Toda esta informacion se encuentra cargada en el BackEnd y se provee mediante APIs. 
          </motion.p>
          </div>
          <motion.img 
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{
          duration: 1,
          delay: .5,
          }} 
          viewport={{ once: true}}
          className='primera-imagen-img' src={imagenEasy2}/>
          <motion.div 
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{
          duration: 1,
          delay: .5,
          }} 
          viewport={{ once: true }}
          className="duo-imagenes-crypto">
            <img className='duo-imagenes-crypto-izq' src={imagenEasy3} />
            <img className='duo-imagenes-crypto-der'src={imagenEasy4} />  
          </motion.div>
          <div className="imagenes-celuEasy">
            <motion.img 
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{
            duration: 1,
            delay: .2,
            }}  className="imagen-celu" src={imagenCelu}/>
            <motion.img 
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{
            duration: 1,
            delay: .3,
            }} 
            className="imagen-celu" src={imagenCelu2}/>
            <motion.img 
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{
            duration: 1,
            delay: .4,
            }} 
            className="imagen-celu" src={imagenCelu3}/>
          </div>
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
        <Footer />
        </>

      </div>
    </div>
  )
}
