import { useContext, useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from "framer-motion"
import { ProyectoElegidoContext } from '../../Context/ProyectoElegidoContext';


const Concepto = () => {
  const { proyectoElegido } = useContext(ProyectoElegidoContext);
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true })
  const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    },[isInView])
  return (
    <motion.div 
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 160 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.7,
        delay: 0.7,
      }} 
    
      className="concepto">
        {sessionStorage.getItem('titulo')== "EasyRides" ? (
          <>
          <p className="concepto-concepto">Concepto</p>
          <p 
          className="concepto-info">
          EasyRides que permite realizar reservas de autos. Estos estan divididos y permiten filtrarse
          por categoria, ciudad y fecha. Cada vehiculo tiene su pagina de detalle con imagenes y descripciones
          del vehiculo. Toda esta informacion se encuentra cargada en el BackEnd y se provee mediante APIs. 
          </p>
          </>
        ):           
        <>
          <p className="concepto-concepto">Concepto</p>
          <p 
          className="concepto-info">
          GoCrypto es una página web en la que se permite ver 
          información de las criptomonedas mas utilizadas. 
          Utilizando la API de CoinGecko para proveer la data 
          actualizada a tiempo real. Podremos realizar busquedas
          de monedas y ver las fluctuaciones que se han realizado, 
          tanto en pesos argentinos como al dólar estadounidense.
          </p>
        </>
        }
      </motion.div>
  )
}

export default Concepto