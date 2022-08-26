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
            countCart();

        }

        else{
        copyCart.push({...item,quantity: quantity});
        setCart(copyCart);
        countCart();
        totalPrice();
        }
    }

    const cleanCart=()=>{
        copyCart=[];
        setCart(copyCart);
        countCart();
        totalPrice();
    }

    const removeItem=(itemId)=>{
        let remove= copyCart.find(item=> item.id == itemId.id);
        let index= copyCart.indexOf(remove);
        copyCart.splice(index,1) 
        setCart(copyCart);
        countCart();
        totalPrice();
    }

    const isInCart=(id)=>{
        return(copyCart.some(item=> item.id == id));
        
    }

    const countCart =()=>{
        let total = 0;
        for(let i=0; i < copyCart.length; i++){
             total+= copyCart[i].quantity
        }
        return  (total);
    }

    const totalPrice =()=>{
        let price = 0;
        for(let i=0; i < copyCart.length; i++){
            price+= (copyCart[i].price * copyCart[i].quantity)
       }
       console.log(price);
       return  (price);
    }

    return(
        <cartcontext.Provider value={ {cart, addToCart, cleanCart, removeItem, countCart, totalPrice}}>
            {children}
        </cartcontext.Provider>
    )

}

export  default CustomCartContextProvider;