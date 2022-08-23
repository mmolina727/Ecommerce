import { createContext } from "react";
import { useState } from "react";

export const cartcontext = createContext();

function CustomCartContextProvider({children}){
    const [cart,setCart]= useState([]);
    let copyCart= [...cart];

    const addToCart=(item,quantity)=>{
        if(isInCart(item.id)){
            let itemFind= copyCart.findIndex(el => el.id == item.id);
            copyCart[itemFind].quantity+= quantity;
            setCart(copyCart);

        }

        else{
        copyCart.push({...item,quantity: quantity});
        setCart(copyCart);
        }
    }

    const cleanCart=()=>{
        copyCart=[];
        setCart(copyCart);
    }

    const removeItem=(itemId)=>{
        let remove= copyCart.find(item=> item.id == itemId.id);
        let index= copyCart.indexOf(remove);
        copyCart.splice(index,1) 
        setCart(copyCart);
    }

    const isInCart=(id)=>{
        return(copyCart.some(item=> item.id == id));
        
    }

    return(
        <cartcontext.Provider value={ {cart, addToCart, cleanCart, removeItem}}>
            {children}
        </cartcontext.Provider>
    )

}

export  default CustomCartContextProvider;