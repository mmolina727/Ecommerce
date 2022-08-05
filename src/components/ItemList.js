import React from 'react'
import Card from "./Card";
import { useEffect, useState } from "react";
import itemsData from "../data/data.js"
import "../css/ItemList.css";

const getData=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(itemsData), 2000)
        });
    };

const ItemList = () => {
      
      const [data, setData]= useState([]);
      
      useEffect(()=>{
        getData().then((respuesta)=>{
            setData(respuesta);
        });
      }, []);
  return (
    <div className='conteiner-card'>
        {data.map((item)=>{
                            return  <Card
                                key={item.product}
                                product={item.product}
                                price={item.price}
                                image={item.img}
                                alt={item.alt}
                            />;    
        })}
    </div>
  );
}

export default ItemList