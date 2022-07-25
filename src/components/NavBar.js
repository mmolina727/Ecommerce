import React from "react";
import "../css/NavBar.css";

function NavBar(){
    return(
        <header className="encabezado">
        <div className="container-main">
            <div className="container-main-list">
                <img  id ="main-icon" src={require("../img/menu-hamburguesa.png")} alt="icon-main"/>
                <ul >
                    <li>HOME</li>
                    <li>PRODUCTOS</li>
                    <li>CONTACTO</li>
                </ul>
            </div> 
            <div className="contenedor-img">
                <img src={require("../img/Logo.png")} alt="logo"/>
            </div>   
        </div>    
    </header>
    );
}

export default NavBar;