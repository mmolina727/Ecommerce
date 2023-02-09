import React from 'react'
import "../css/Footer.css"

function Footer() {
  return (
    <div>
        <div className='content-footer'>
            <div className='social-media'>
                <p>COPYRIGHT © 2023 TIENDA REGIONAL TANDIL </p>
                <img src= {require("../img/instagram.png") } alt="Instagram"/>
                <img src= {require("../img/facebook.png") } alt="Facebook"/>
            </div>
            <div className='footer-paragraph'>
                <p>POWERED BY <b>MOLINA,MATIAS</b></p>
            </div>
        </div>
    </div>
  )
}

export default Footer