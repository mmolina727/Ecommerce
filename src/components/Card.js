import React from 'react'
import "../css/Card.css";
import { Link } from "react-router-dom";

const Card = ({img, id, price, product, alt}) => {
  return (
    <div className='card'>
        <div className='card-image'>
            <img src={img} alt= {alt}/>
        </div>
        <div className='card-text'>
            <h3>{product}</h3>
            <p>${price} x Ud.</p>
            <Link to={`/detalle/${id}`}>
              <button>Ver mas</button>
            </Link>
        </div>
    </div>
  )
}

export default Card;