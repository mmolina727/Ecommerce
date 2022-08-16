import React from 'react'
import Card from "./Card";
import "../css/ItemList.css";

const ItemList = ({data}) => {
  return (
    <div className='conteiner-card'>
        {data.map((item)=>{
                            return  <Card 
                                    key= {item.id}
                                    id= {item.id}
                                    product= {item.product}
                                    img= {item.img}
                                    alt= {item.alt}
                                    price= {item.price}
                            />;    
        })}
    </div>
  );
}  


export default ItemList