import React from 'react'
import { cartcontext } from '../context/CartContext'
import { useContext } from 'react';
import { ItemCart } from './ItemCart';
import "../css/Cart.css";
import { useEffect } from 'react';
import { UserForm } from './UserForm';

export const Cart = () => {

    const {cart, totalPrice}=useContext(cartcontext);
    useEffect(()=>{
    },[cart]);

    if(cart.length ===0){
      return(
        <div className='cart'>
          <p className='msg-cart'>El carrito se encuentra vacio</p>
        </div>
      )
    }
    else{
  return (
    

    <div >
      <div className='cart'>
      <ul className='conteiner-cart'>
        <li>Producto</li>
        <li>Precio</li>
        <li>Detalle</li>
        <li>Cantidad</li>
        <li></li>
      </ul>
        {cart.map((item)=>{
                            return  <ItemCart 
                                    key= {item.id}
                                    id= {item.id}
                                    product= {item.product}
                                    img= {item.img}
                                    alt= {item.alt}
                                    price= {`${item.price}`}
                                    quantity={item.quantity}
                            />;    
        })}
      <div className='cart-price'> Total: ${totalPrice()}</div>
      </div>
      <UserForm/>
    </div>
  )}
}
