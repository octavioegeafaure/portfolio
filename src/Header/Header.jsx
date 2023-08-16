import "./Header.css"
import { motion } from 'framer-motion'
import { useRef } from "react";
import { Link } from "react-router-dom";
import curriculum from "../../public/ArchivoCV/curriculum.pdf"

export const Header = () => {

  const navRef = useRef();
  const mostrarNavBar = () => {
    navRef.current.classList.toggle("responsive-header");
  };

  return (

    <header
      className="header"
    >
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.7,
      }} className="header-container">
        <Link to={`/portfolio/`}>
          <p className="header-logo">octavio</p>
        </Link>
      
      <nav ref={navRef} className="header-container-derecha">
        <Link target="_blank"  to={`https://www.linkedin.com/in/octavio-egea-faure-51339a24a/`}>
          <p className="header-container-derecha-logo">(linkedin)</p>
        </Link>
        <Link target="_blank"  to={curriculum}>
          <p className="header-container-derecha-logo">(cv)</p>
        </Link>
        
        <Link target="_blank" rel="noopener noreferrer" to={`https://github.com/octavioegeafaure`}>
          <p className="header-container-derecha-logo">(git)</p>
        </Link>
        
        
      <button
        className="header-boton header-cerrar-boton"
        onClick={mostrarNavBar}
      >
        Cerrar
      </button>
      </nav>
      <button className="header-boton" onClick={mostrarNavBar}>
        menu
      </button>
      </motion.div>
    </header>
  );
}
