import React from 'react'
import './footer.css';
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
<a href='#' className='footer__logo'>Cesar Villa</a>
    <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>Acerca de</a></li>
      <li><a href='#experience'>Experiencia</a></li>
      <li><a href='#services'>Servicios</a></li>
      <li><a href='#portafolio'>Portafolio</a></li>
      <li><a href='#contact'>Contacto</a></li>
    </ul>

    <div className='footer__socials'>
      <a href='https://facebook.com'><FaFacebook/></a>
      <a href='https://facebook.com'><FiInstagram/></a>      
    </div>

    <div className='footer__copyright'>
      <small>&copy;EGATOR Tutorials. Todos los derechos reservados.</small>

    </div>
    </footer>
  )
}

export default Footer