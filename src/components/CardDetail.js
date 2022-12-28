import React from 'react'
import "../css/CardDetail.css";
import ItemCount from './ItemCount';
import { useState } from 'react';
import { useContext } from 'react';
import { cartcontext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const CardDetail = ({id,img, alt, product, price, }) => {

  const {addToCart, cleanCart, removeItem, countCart}=useContext(cartcontext);

  const [count,SetCount] = useState (0);

  const onCount=(count)=>{
    const cartItem= {id,img,alt,product,price}

    addToCart(cartItem,count);
    //cleanCart();
    

    
    SetCount(count);

    swal("Producto agregado al carrito", "", "success");
  }

    return (
      <div className='card-detail'>
          <div className='card-detail-image'>
              <img src={img} alt= {alt}/>
              <p>Lorem ipsum dolor sit amet. Sit sequi maiores eum omnis fugit cum internos dolore cum rerum possimus. Vel voluptatibus adipisci aut quia dolor id voluptatem alias ut nostrum facere id incidunt quam. Eum quaerat doloremque ut porro eveniet sit quaerat alias et molestias eveniet. Ut veritatis Quis et voluptatum esse ut commodi ducimus.</p>
          </div>
          <div className='card-detail-text'>
              <h3>{product}</h3>
              <p>${price} x Ud.</p>
              {(count==0) ?
              <ItemCount initial="1 " stock="10" onAdd={onCount}/>
              :<Link to={"/cart"}><button>Ir al carrito</button></Link>
              }     
          </div>
      </div>
    )
  }
export default CardDetail;