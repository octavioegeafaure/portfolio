
import "./Banner.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Clock from 'react-live-clock';

export const Banner = () => {
  const { scrollYProgress } = useScroll();
  const yFrontend = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yDeveloper = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  

  return (
    <div className="banner"  id="banner">
      <div >
        <div className="banner-primero">
        <motion.h1
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.6,
          }}
          style={{ x: yFrontend }}
          className="banner-primero-frontend"
        >
          frontend
        </motion.h1>
        </div>
        <div className="banner-abajo">
          <motion.h1
            
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 1.2,
              delay: 1,
            }}
            style={{ x: yDeveloper }}
            className="banner-abajo-developer"
          >
            developer
          </motion.h1>
        </div>
      </div>
      

      
        <motion.div
          initial={{ opacity: 0, y: 165 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1.3,
            delay: 1.5,
          }}
          style={{opacity:opacity}}
          className="banner-texto"
        >
          <div className="banner-texto-izquierda">
            <p className="banner-texto-p">CóRDOBA, ARGENTINA</p>
            <p className="banner-texto-p">PORTFOLIO WEB</p>  
               
          </div>

          <div className="banner-texto-derecha">
            <p className="banner-texto-p">2023</p> 
            
            <p className="banner-texto-p">GMT-2 <Clock format={'HH:mm:ss'} ticking={true}/> </p>
          </div>
        </motion.div>
      </div>
   
  );
};
