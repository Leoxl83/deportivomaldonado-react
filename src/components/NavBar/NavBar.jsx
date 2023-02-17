import React from 'react'
import badge from '../../img/badge.png';
import './style.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark sticky-top navbar-expand-lg bg-dark">
      <div className="container-lg">
        <picture>
          <img src={badge} alt="logo" width="40px" />
        </picture>
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#historia">HISTORIA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#plantel">PLANTEL</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#noticias">NOTICIAS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#socio">HACETE SOCIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">CONTACTO</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
}

export default NavBar