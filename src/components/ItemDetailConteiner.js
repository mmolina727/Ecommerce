import React  from 'react'
import { useEffect, useState } from "react";
import itemsData from "../data/data.js"
import CardDetail from './CardDetail.js';
import { useParams} from "react-router-dom";

const ItemDetailConteiner = () => {

  const Id= useParams().id;

  const getData=()=>{
    return new Promise((resolve, reject)=>{
       let ItemRequested= itemsData.find((element)=> element.id==Id);

      (ItemRequested===undefined) ? reject("item no encontrado") : resolve(ItemRequested)
    });
    };

  const [data, setData]= useState([]);
      
      useEffect(()=>{
        getData()
        .then((respuesta)=> setData(respuesta)
        .catch((error)=> setData(error))
        );
      }, []);

  return (
          <CardDetail 
                      product= {data.product}
                      img= {data.img}
                      alt= {data.alt}
                      price= {data.price} />
  );
}

export default ItemDetailConteiner
