import React from 'react'
import "../css/Footer.css"

function Footer() {
  return (
    <div>
        <div className='content-footer'>
            <div className='social-media'>
              <div className='footer-img'>
                <img src={require("../img/logoMolina.png")} alt='logo'/>
              </div>
              <div className='social'>
                <img src= {require("../img/instagram.png") } alt="Instagram"/>
                <img src= {require("../img/facebook.png") } alt="Facebook"/>
              </div>
            </div>
            <div className='data'>
                  <h3>DATOS PERSONALES</h3>
                  <ul>
                    <li><b>Tandil</b> | Av. España 23</li>
                    <li>Tandil - Buenos Aires - Argentina</li>
                    <li>Tel: (249) 154332211</li>
                    <li><b>Sucursal</b> | Alberdi 422</li>
                    <li>Tandil - Buenos Aires - Argentina</li>
                  </ul>
            </div>
            <div className='newsletter'>
              <div>
                <div>
                <h3>NEWSLETTER</h3>
                </div>
                <div>
                  <p>Introduzca su direccion de correo electronico para recibir noticias, informacion sobre nuevos productos, ofertas especiales y descuentos.</p>
                </div>
                <div>
                  <input type="email" placeholder='Mail' className='footer-input'></input>
                  <button className='btn-footer'>Enviar</button>
                </div>
              </div>
            </div>
            <div className='deliver'>
              <p className='paragraph-deliver'>Prepará tu picada! con los mejores productos de Tandil</p>
              <img src={require("../img/envios-domicilio.png")} alt='envios'/>
            </div>
        </div>
    </div>
  )
}

export default Footer