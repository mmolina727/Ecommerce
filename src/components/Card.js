import React from 'react'
import "../css/Card.css";
import ItemCount from './ItemCount';

const Card = ({image, alt, product, price}) => {
  return (
    <div className='card'>
        <div className='card-image'>
            <img src={`${image}`} alt= {alt}/>
        </div>
        <div className='card-text'>
            <h3>{product}</h3>
            <p>{price}</p>
            <ItemCount initial="1 " stock="5"/>
            <button>Agregar carrito</button>
        </div>
    </div>
  )
}

export default Card;