import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import "./About.css"

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    },[isInView])

  return (
    <div ref={ref} className="about">
        <motion.div         
        className='about-texto'>
            <motion.p         
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
            className="about-texto-letra">
                Soy Octavio, diseñador Frontend especializado en React.Js . Mi pasión se encuentra en la creación de productos que resuelvan necesidades y que al mismo tiempo tengan impacto visual.   
            </motion.p>

        </motion.div>

    </div>
  );
}

export default About