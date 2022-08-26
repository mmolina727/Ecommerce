import React from 'react'
import "../css/ItemCart.css";
import { useContext } from 'react';
import { cartcontext } from '../context/CartContext';
import { useState } from 'react';


export const ItemCart = ({img, price, product, quantity}) => {
  const {cart, removeItem}=useContext(cartcontext);

  return (
    <div className='content-list-cart'>
        <div className='cart-list-img'><img src={img}/></div>
        <div className='cart-list'>${price}x ud</div>
        <div className='cart-list'>{product}</div>
        <div className='cart-list'>{quantity}</div>
        <div><button onClick={()=> removeItem(cart)}>x </button></div>
    </div>
  )
}
