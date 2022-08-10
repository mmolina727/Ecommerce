import React from 'react'
import "../css/Card.css";
import ItemCount from './ItemCount';

const CardDetail = ({data}) => {
    return (
      <div className='card'>
          <div className='card-image'>
              <img src={data.img} alt= {data.alt}/>
          </div>
          <div className='card-text'>
              <h3>{data.product}</h3>
              <p>{data.price}</p>
              <ItemCount initial="1 " stock="5"/>
              <button>Agregar carrito</button>
          </div>
      </div>
    )
  }
export default CardDetail;