import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartcontext } from '../context/CartContext'
import "../css/CartWidget.css";

export const CartWidget = () => {
  const {countCart}=useContext(cartcontext);
  return (
    <div className='content-widget'>
      <Link to={"/cart"}>
      <img src= {require("../img/cart.png")} alt="cart"/>
      <span>{countCart()}</span>
      </Link>
    </div>
    
  )
}

export default CartWidget