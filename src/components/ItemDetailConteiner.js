import React  from 'react'
import { useEffect, useState } from "react";
import CardDetail from './CardDetail.js';
import { useParams} from "react-router-dom";
import firestoreDB from "../database/firestone";
import { getDoc, collection, doc} from "firebase/firestore";


function getById(id) {
  return new Promise( (resolve) =>{
    const todosCollectionRef = collection(firestoreDB, "productos");
    const docRef = doc(todosCollectionRef, id);

    getDoc(docRef).then( snapshot => {
        resolve(
          { ...snapshot.data(), id: snapshot.id} 
        )
        console.log(resolve);
    });    
  } )
}

function ItemDetailConteiner() {

    const [item, setDetail] = useState([])
    const {id} = useParams();
    useEffect(() => {
      if (id) {
        getById(id).then((resolve) => {
          setDetail(resolve)
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
