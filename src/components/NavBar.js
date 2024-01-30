import React, { useEffect, useState } from "react";
import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){

    const [scroll,setScroll]= useState(false);

    const imageSize=()=>{

        if(window.scrollY>10){
            console.log(window.scrollY);
            setScroll(true);
        }
        else{
            setScroll(false)
        }
    }

    useEffect(()=>{
        imageSize();
        window.addEventListener('scroll',imageSize)

        return ()=>{
            window.removeEventListener('scroll',imageSize)
        }

    },[])


    return(
        <header className={`encabezado`} onScroll={imageSize}>
            <div className="container-main-list">
                <ul className="main-list">
                    <li> <Link to={"/nosotros"}>Nosotros</Link></li>
                    <li>Preguntas frecuentes?</li>
                    <li>Contacto</li>
                </ul>
            </div>
        <div className="container-main">
            <div className={`contenedor-img ${scroll ? 'scrolled' : ''}`}>
                <Link to={"/"}><img src={require("../img/logoMolina.png")} alt="logo"/></Link>
            </div>
            <div className="container-cart">
                <CartWidget/>
            </div>   
        </div>    
        <div className="container-list">
            <div className="list">
                <ul>
                    <li><Link to ={`category/quesos`}>QUESOS</Link></li>
                    <li><Link to ={`category/embutidos`}>EMBUTIDOS</Link></li>
                    <li><Link to ={`category/cervezas`}>CERVEZAS</Link></li>
                </ul>
            </div>
        </div> 
    </header>
    );
}

export default NavBar;