import React from 'react'
import './Style.css'
import libertadores from '../../img/libertadores.jpg'
import acreditaciones from '../../img/acreditaciones.jpg'
import proximopartido from '../../img/proximopartido.jpg'

const Noticias = () => {
  return (
    <section id="noticias" className="noticias-recientes text-center d-flex flex-column ">
      <h1 className="titulo">Noticias</h1>
      <div className="container text-center noticias-contenedor">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="noticia">
              <img src={libertadores} alt="libertadores estadio" />
              <h4>Por copa!</h4>
              <p>Ya estan las entradas disponibles para el partido por copa libertadores frente a Fortaleza. Podras adquirirlas a traves de RedTicket y RedUTS</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="noticia">
              <img src={acreditaciones} alt="acreditaciones" />
              <h4>Prensa</h4>
              <p>Se habilitó el proceso de acreditación de periodistas y fotógrafos para el partido de Deportivo Maldonado vs
                Fortaleza EC por CONMEBOL Libertadores.  El mismo se disputará el próximo jueves 23/2 en el Domingo Burgueño Miguel.</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="noticia">
              <img src={proximopartido} alt="imagen proximo partido" />
              <h4>Viajamos al Cerro!</h4>
              <p>Este fin de semana viajamos a Montevideo para enfrentar a @CACerro_oficial por la 3era fecha del @CampeonatoAUF
                Las entradas se venden por @RedTicketsUY y tienen un valor de 400 pesos.
                #VamosMaldonado #Fecha3</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Noticias