import  './AboutEfecto.css'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Divisor } from '../Divisor/Divisor';

const phrases = [

  "Soy Octavio, diseñador Frontend ",
  "especializado en React.Js . Mi ",
  "pasión se encuentra en la creación ",
  "de productos que resuelvan",
  "necesidades y que al mismo",
  "tiempo tengan impacto visual.",
]

export default function AboutEfecto() {
  return (
    <div className='container'>
      
      <MaskText/>
    </div>
  )
}

export function MaskText() {
  const animate = {
    initial: {y: "100%"},
    open: i => ({y: "0", transition: {duration: 1, delay: 0.8}})
  }
  const body = useRef(null)
  const isInView = useInView(body, {once: true, margin: "-10%"})

//   const { ref, inView, entry } = useInView({
//     threshold: 0.75,
//     triggerOnce: true
//   });

  return(
    <div ref={body} className="body">
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className="line-mask">
            <motion.p custom={index} variants={animate} initial="initial" animate={isInView ? "open" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}
