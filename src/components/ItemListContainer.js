import React from 'react'
import  "../css/ItemListContainer.css";
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import itemsData from '../data/data.js';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({greeting}) => {

  const category= useParams().idCategory;

  const getData=()=>{

    

    return new Promise((resolve)=>{
        setTimeout(()=> resolve(itemsData), 2000)
        });
    };
      const [data, setData]= useState([]);
      
      useEffect(()=>{
        let ItemFilter= itemsData.filter((element)=> element.category===category);
        getData()
          .then((respuesta)=>{
            (category==undefined) ? setData(respuesta) : setData(ItemFilter);
        })
      }, [category]);
      
  return (
    <div className="container-item-list">
        <p>{greeting}</p>
        <ItemList data= {data}/>
    </div>
  )
}

export default ItemListContainer