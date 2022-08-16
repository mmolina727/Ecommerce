import React from "react";
import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <header className="encabezado">
        <div className="container-main">
            <div className="container-main-list">
                <img  id ="main-icon" src={require("../img/menu-hamburguesa.png")} alt="icon-main"/>
                <ul >
                    <li><Link to={"/"}>HOME</Link></li>
                    <li><Link to ={`category/quesos`}>QUESOS</Link></li>
                    <li><Link to ={`category/embutidos`}>EMBUTIDOS</Link></li>
                </ul>
            </div> 
            <div className="contenedor-img">
                <img src={require("../img/Logo.png")} alt="logo"/>
            </div>
            <div className="container-cart">
                <CartWidget/>
            </div>   
        </div>    
    </header>
    );
}

export default NavBar;