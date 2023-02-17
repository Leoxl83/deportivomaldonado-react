import React from 'react';
import racing from '../../img/racing.png';
import badge from '../../img/badge.png';
import cerro from '../../img/cerro.png';
import './Styles.css'

const Partidos = () => {
  return (
    <div className='partidos'>
      <div className='ultimoPartido'>
        <h3>Último Partido</h3>
        <div className="logos">
          <div className="local">
            <div className="logoLocal">
              <img src={badge} alt="logo" width="50px" />
            </div>
            <div className="goles">1</div>
          </div>

          <div className="versus">VS</div>

          <div className="visitante">
            <div className="logoVisitante">
              <img src={racing} alt="logo" width="65px" />
            </div>
            <div className="goles">1</div>
          </div>
        </div>
        <div className="fecha">11 de febrero 2023</div>
      </div>
      <div className='ultimoPartido'>
        <h3>Próximo Partido</h3>
        <div className="logos">
          <div className="local">
            <div className="logoLocal">
              <img src={cerro} alt="logo" width="55px" />
            </div>
            <div className="goles">-</div>
          </div>

          <div className="versus">VS</div>

          <div className="visitante">
            <div className="logoVisitante">
              <img src={badge} alt="logo" width="50px" />
            </div>
            <div className="goles">-</div>
          </div>
        </div>
        <div className="fecha">18 de febrero 2023</div>

      </div>

    </div>
  )
}

export default Partidos