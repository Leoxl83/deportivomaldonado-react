import React from 'react'
import './Styles.css';

const Footer = () => {
  return (
    <footer className="bg-dark d-flex flex-column align-items-center justify-content-center">
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <a href="https://github.com/leoxl83" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/leonardo-langorta/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="mailto:leonardo.langorta@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="derechos-de-autor">Creado por Leonardo Langorta (2023) &#169;</div>
    </footer>)
}

export default Footer