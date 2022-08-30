import React from 'react'
import  "../css/ItemListContainer.css";
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import itemsData from '../data/data.js';
import { useParams } from 'react-router-dom';
import firestoreDB from "../database/firestone";
import {getDocs, collection, doc, query, where} from "firebase/firestore";

export const ItemListContainer = ({greeting}) => {
  const [data, setData]= useState([]);

  const idCategory= useParams().idCategory;

  const getData=()=>{

    return new Promise((resolve)=>{
      const productColletion = collection(firestoreDB, "productos");

      getDocs(productColletion).then( snapshot => {
        const docsData= snapshot.docs.map( docs => {
          return {...docs.data(), id: doc.id}
        });
        resolve(docsData);
      });
    })
  };

  function getItemsFromDBbyIdCategory(idCategory) {
        return new Promise((resolve) => {
          const productsCollection = collection(firestoreDB, "productos");
          const queryProducts = query(productsCollection, where("category", "==", idCategory))
          getDocs(queryProducts).then(snapshot => {
            const docsData = snapshot.docs.map(doc => {
              return { ...doc.data(), id: doc.id }
            });
            resolve(docsData);
            console.log(docsData)
          });
        });
      };

  useEffect(() => {
        if (idCategory) {
          getItemsFromDBbyIdCategory(idCategory).then((resolve) => {
            setData(resolve)
          });
    
        } else {
          getData().then((resolve) =>{
            setData(resolve) 
          });
        }
      }, [idCategory])
      
  return (
    <div className="container-item-list">
        <p>{greeting}</p>
        <ItemList data= {data}/>
    </div>
  )
}

export default ItemListContainer