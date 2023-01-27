import React from 'react'
import  "../css/ItemListContainer.css";
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firestoreDB from "../database/firestone";
import {getDocs, collection, query, where} from "firebase/firestore";
import { Ring } from '@uiball/loaders'

export const ItemListContainer = ({greeting}) => {
  const [data, setData]= useState([]);

  const idCategory= useParams().idCategory;

  const getData=()=>{

    return new Promise((resolve)=>{
      const productColletion = collection(firestoreDB, "productos");

      getDocs(productColletion).then( snapshot => {
        const docsData= snapshot.docs.map( docs => {
          return {...docs.data(), id: docs.id}
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
              return { ...doc.data(), id: doc.id}
            });
            resolve(docsData);
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
      {(data.length==0)
      ?<Ring 
      size={70}
      lineWeight={7}
      speed={1} 
      color="gray" 
    />
      :<>  
      <p className='title'>{greeting}</p>
        <ItemList data= {data}/>
      </> 
      }
    </div>
  )
}

export default ItemListContainer