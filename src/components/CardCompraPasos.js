import React from 'react'
import "../css/CardCompraPasos.css";

export const CardCompraPasos = ({img,text,title}) => {
  return (
    <div className='steps-content'>
        <div className='step-img'>
            <img src={require(`../img/${img}`)} alt='guia'/>
        </div>
        <div className='description-step'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default CardCompraPasos;
