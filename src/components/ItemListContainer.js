import React from 'react'
import  "../css/ItemListContainer.css";
import ItemList from './ItemList';


export const ItemListContainer = ({greeting}) => {
  return (
    <div className="container-item-list">
        <p>{greeting}</p>
        <ItemList/>
    </div>
  )
}

export default ItemListContainer