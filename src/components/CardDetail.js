import React from 'react'
import "../css/CardDetail.css";
import ItemCount from './ItemCount';
import { useState } from 'react';

const CardDetail = ({img, alt, product, price, }) => {

  const [count,SetCount] = useState (0);

  const onCount=(count)=>{

    console.log(`se agregaron ${count} unidades de ${product}`);
    SetCount(count);
    console.log(count);
  }

    return (
      <div className='card-detail'>
          <div className='card-detail-image'>
              <img src={img} alt= {alt}/>
              <p>Lorem ipsum dolor sit amet. Sit sequi maiores eum omnis fugit cum internos dolore cum rerum possimus. Vel voluptatibus adipisci aut quia dolor id voluptatem alias ut nostrum facere id incidunt quam. Eum quaerat doloremque ut porro eveniet sit quaerat alias et molestias eveniet. Ut veritatis Quis et voluptatum esse ut commodi ducimus.</p>
          </div>
          <div className='card-detail-text'>
              <h3>{product}</h3>
              <p>{price}</p>
              {(count==0) ?
              <ItemCount initial="1 " stock="10" onAdd={onCount}/>
              :<button>Agregar carrito</button>
              }     
          </div>
      </div>
    )
  }
export default CardDetail;