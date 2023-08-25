import React from 'react'
import "./Footer.css"
import Clock from 'react-live-clock';
import { Divisor } from '../Divisor/Divisor';

const Footer = () => {
  return (
    <div >
        
        <div className="footer banner-texto-derecha">
            <p className="banner-texto-p">PORTFOLIO WEB 2023</p>
            <p className="banner-texto-p"></p>
            <p className="banner-texto-p">GMT-2 <Clock format={'HH:mm:ss'} ticking={true}/> </p>
        </div>
    </div>
  )
}

export default Footer