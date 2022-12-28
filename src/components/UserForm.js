import React from 'react'
import "../css/UserForm.css";
import { useState } from 'react';
import { cartcontext } from '../context/CartContext'
import { useContext } from 'react';
import firestoreDB from "../database/firestone";
import { addDoc, collection} from "firebase/firestore";
import swal from 'sweetalert';

export const UserForm = () => {
  const {cart, totalPrice, cleanCart}=useContext(cartcontext);

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

      setUserData({
        email: "",
        name: "",
        phone: ""
    });

    swal("Felicitaciones!", "Orden de compra realizada", "success");

    cleanCart();
    }

    const changeInput= (e)=>{
        const input= e.target;
        const value= input.value;
        const inputName = input.name

        let copyUserData = {...userData}

        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

  return (
    <div className='user-form'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input onChange={changeInput} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userData.email} required/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Nombre</label>
    <input onChange={changeInput} type="text" name='name' className="form-control" id="exampleInputPassword1" value={userData.name} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Telefono</label>
    <input onChange={changeInput} type="number" name='phone' className="form-control" id="exampleInputPassword1" value={userData.phone} required/>
  </div>
  <button type="submit" className="btn btn-success">Finalizar compra</button>
</form>
</div>
  );
}
