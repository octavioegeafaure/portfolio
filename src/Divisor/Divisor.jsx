import { useEffect, useRef } from 'react'
import "./Divisor.css"
import { motion, useAnimation, useInView } from "framer-motion";


export const Divisor = (props) => {
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
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
            duration: 0.8,
            delay: 0.6,
            }}
            
            className="about-division"
        >

            <p className="about-numero">{props.numero}</p>
            <motion.div
            ref={ref}
            variants={{
            hidden: { opacity: 0, x: 1500 },
            visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{
            duration: 2.5,
            delay: 0.5,
            }}
            className='about-texto-linea'>
                {/* <div className='about-texto-linea-adentro'>
                </div> */}
                
            </motion.div>
            {/* <svg className='svgg'>
                <line x1="80" x2="1210" className='svg'/>
            </svg> */}
        </motion.div>
  )
}
