import React  from 'react'
import { useEffect, useState } from "react";
import CardDetail from './CardDetail.js';
import { useParams} from "react-router-dom";
import firestoreDB from "../database/firestone";
import { getDocs,doc, collection, getDoc} from "firebase/firestore";




function ItemDetailConteiner() {

  const [item, setData]= useState([]);

  const id= useParams().id;

  const getData=()=>{

    return new Promise((resolve)=>{
      const productColletion = collection(firestoreDB, "productos");

      getDocs(productColletion).then( snapshot => {
        const docsData= snapshot.docs.map( docs => {
          return {...docs.data()}
        });
        resolve(docsData);
      });
    })
  };

  function getItemsFromDBbyId(id) {
        return new Promise((resolve) => {
          const productsCollection = collection(firestoreDB, "productos");
          const docRef= doc(productsCollection, id)
          let producto={};
          getDoc(docRef).then(doc=> {
            producto= {...doc.data(), id: doc.id}
            resolve(producto);
          })
        });
      };

  useEffect(() => {
        if (id) {
          getItemsFromDBbyId(id).then((resolve) => {
            setData(resolve)
          });
    
        } else {
          getData().then((resolve) =>{
            setData(resolve) 
          });
        }
      }, [id])
  
  return (
          <CardDetail 
                      product= {item.product}
                      img= {item.img}
                      alt= {item.alt}
                      price={item.price}
                      id={item.id} />
  );
  }  
  

export default ItemDetailConteiner;
