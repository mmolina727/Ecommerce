import React from 'react'
import "../css/UserForm.css";
import { useState } from 'react';
import { cartcontext } from '../context/CartContext'
import { useContext } from 'react';
import firestoreDB from "../database/firestone";
import { addDoc, collection} from "firebase/firestore";

export const UserForm = () => {
  const {cart, totalPrice}=useContext(cartcontext);

    const [userData, setUserData] = useState({
        email: "",
        name: "",
        phone: ""
    });

    const ordenCompra={
      buyer:{...userData},
      item: [...cart],
      price: totalPrice(),
      date: new Date()
    }

     async function handleSubmit(e){
      e.preventDefault();

      const collectionDB= collection(firestoreDB, "orders");
      const docRef= await addDoc(collectionDB, ordenCompra);
      console.log(docRef);

      setUserData({
        email: "",
        name: "",
        phone: ""
    });
    console.log(ordenCompra);
    }

    const changeInput= (e)=>{
        const input= e.target;
        const value= input.value;
        const inputName = input.name

        let copyUserData = {...userData}

        copyUserData[inputName] = value;
        setUserData(copyUserData);
        console.log(copyUserData);
    }

  return (
    <div className='user-form'>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input onChange={changeInput} type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.email} required/>
    <div id="emailHelp" class="form-text"></div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Nombre</label>
    <input onChange={changeInput} type="text" name='name' class="form-control" id="exampleInputPassword1" value={userData.name} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Telefono</label>
    <input onChange={changeInput} type="number" name='phone' class="form-control" id="exampleInputPassword1" value={userData.phone} required/>
  </div>
  <button type="submit" class="btn btn-primary">Finalizar compra</button>
</form>
</div>
  );
}
