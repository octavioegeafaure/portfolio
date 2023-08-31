import "./PrimeraImagen.css"
import { motion, useAnimation, useInView } from "framer-motion"
import imagenCrypto from "./Images/GoCrypto/primeraImagen.png"
import imagenCrypto2 from "./Images/GoCrypto/dashboard.png"
import imagenCrypto3 from "./Images/GoCrypto/dashboardCompleto.png"
import imagenCrypto4 from "./Images/GoCrypto/cuadroMonedas.png"
import imagenCryptoCelu from "./Images/GoCrypto/celuPrimero.png"
import imagenCryptoCeluSegundo from "./Images/GoCrypto/celuSegundo.png"
import imagenCryptoCeluTercero from "./Images/GoCrypto/celuTercero.png"
import { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Footer from "../../Footer/Footer"
import useAnimateOnInView from "../../Hooks/useAnimateOnInView"

export const PrimeraImagen = () => {
    
    const scrollRef = useRef(null)
    useEffect(() => {
     window.scrollTo(0, 0);
    }, []);
  return (
    
    <div
      className='primera-imagen'>
      <motion.div
        initial={{ y: 150 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          }} 
      
      >
        <img className='primera-imagen-img' src={imagenCrypto}/>
        
      </motion.div>

      <div
        className="concepto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
          duration: 1,
          delay: 1,
          }} 
          viewport={{ once: true }}
          className="concepto-info">
          GoCrypto es una página web en la que se permite ver 
          información de las criptomonedas mas utilizadas. 
          Utilizando la API de CoinGecko para proveer la data 
          actualizada a tiempo real. Podremos realizar busquedas
          de monedas y ver las fluctuaciones que se han realizado, 
          tanto en pesos argentinos como al dólar estadounidense.
          </motion.p>
      </div>
        <div>
          <motion.img 
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{
          duration: 1,
          delay: .5,
          }} 
          viewport={{ once: true}}
          className='primera-imagen-img' src={imagenCrypto2}/>
          <motion.div 
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{
          duration: 1,
          delay: .5,
          }} 
          viewport={{ once: true }}
          className="duo-imagenes-crypto">
            <img className='duo-imagenes-crypto-izq' src={imagenCrypto4} />
            <img className='duo-imagenes-crypto-der'src={imagenCrypto3} />  
          </motion.div>
        </div>
        {/* <div className="imagenes-celu">
          <img src={imagenCryptoCelu} />
          <img src={imagenCryptoCeluSegundo} />
          <img src={imagenCryptoCeluTercero} />
        </div> */}
      <div className="boton-proyecto">
          <p>siguiente proyecto</p>
          <Link
          onClick={() => {
            
          // setProyectoElegido(titulo);
          localStorage.setItem('titulo', "EasyRides")
          // window.location.reload()
          }}
          
          to={`/portfolio/proyectos/EasyRides`}
          >
            <div className="boton-proyecto-proyecto">
              <h5>easyrides</h5>
            </div>
          </Link>
        <Footer />   
      </div>
     
    </div>
    
  )
}
// BOTON 
