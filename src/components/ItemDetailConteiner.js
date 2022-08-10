import React  from 'react'
import { useEffect, useState } from "react";
import itemsData from "../data/data.js"
import CardDetail from './CardDetail.js';

const ItemDetailConteiner = () => {

  const getData=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=> {resolve(itemsData[0])}, 2000)});
    };

  const [data, setData]= useState([]);
      
      useEffect(()=>{
        getData().then(respuesta=>{
            setData(respuesta);
        });
      }, []);

  return (
          <CardDetail data={data} />

  );
}

export default ItemDetailConteiner
