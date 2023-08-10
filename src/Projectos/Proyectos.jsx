import { useState } from "react"
import Modal from "./Modal/Modal"
import Proyecto from "./Proyecto/Proyecto"
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const misProyectos = [
        {
            titulo: "EasyRides",
            src: "/dist/ImagenesModal/easyrides.png",
            color: "orange",
        },
        {
            titulo: "GoCrypto",
            src: "/dist/ImagenesModal/prueba.png",
            color: "blue",
        },
    ]

const Proyectos = () => {
    const [ modal, setModal ] = useState ({active: false, index: 0})
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    },[isInView]) 

    
   

    
    return (

        <div
            className="proyecto-padding">
        <motion.div 
            // ref={ref}
            // variants={{
            // hidden: { opacity: 0 },
            // visible: { opacity: 1 },
            // }}
            // initial="hidden"
            // animate={mainControls}
            // transition={{
            // duration: 0.8,
            // delay: 1,
            // }}
            className="proyecto-container-linea-abajo">
            <div className="containerProyecto">
                <div>
                    {
                        misProyectos.map((proyecto, index) => {
                            return <Proyecto index={index} key={index}  titulo = {proyecto.titulo} setModal={setModal} />
                        })
                    }
                </div>
                
            </div>
            <Modal modal={modal} misProyectos={misProyectos}/>
        </motion.div>
        </div>
    )
}

export default Proyectos