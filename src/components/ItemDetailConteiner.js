import React  from 'react'
import { useEffect, useState } from "react";
import itemsData from "../data/data.js"
import Card from './Card.js';

const ItemDetailConteiner = () => {

  const getData=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(itemsData), 2000)});
    };

  const [data, setData]= useState([]);
      
      useEffect(()=>{
        getData().then((respuesta)=>{
            setData(respuesta[0]);
        });
      }, []);

  return (
    <div className='conteiner-card'>
        <div className='conteiner-card'>  
          <Card 
                product={data.product}
                image={data.image}
                alt={data.alt}
                price={data.price}/>
        </div>
    </div>
  );
}

export default ItemDetailConteiner
