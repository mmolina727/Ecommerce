import React from 'react'
import  "../css/ItemListContainer.css";

export const ItemListContainer = ({greeting}) => {
  return (
    <div className="container-item-list">
        <p>{greeting}</p>
    </div>
  )
}

export default ItemListContainer