/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Modal.css';
import gsap from 'gsap';



const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

// eslint-disable-next-line react/prop-types
export default function Modal({modal, misProyectos}) {

  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX)
      yMoveContainer(pageY)
      xMoveCursor(pageX)
      yMoveCursor(pageY)
      xMoveCursorLabel(pageX)
      yMoveCursorLabel(pageY)
    })
  }, [])

  return (
    <>
        {/* <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className="modal-container">
            <div style={{top: index * -100 + "%"}} className="modal-slider">
            {
                misProyectos.map( (proyecto, index) => {
                const { titulo, src, color } = proyecto
                return <div className="modal" 
                style={{backgroundColor: color }} 
                key={{index}}>
                  <img src={src} width={300} height={0} alt={titulo}/ > 
                </div>
                })
            }
            </div>
        </motion.div> */}
        <motion.div ref={cursor} className="cursor" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className="cursor-label" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
    </>
  )
}