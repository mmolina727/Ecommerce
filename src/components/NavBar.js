import React from "react";
import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <header className="encabezado">
        <div className="container-main">
            <div className="contenedor-img">
                <Link to={"/"}><img src={require("../img/Logo.png")} alt="logo"/></Link>
            </div>
            <div className="container-main-list">
                <ul >
                    <li><Link to ={`category/quesos`}>QUESOS</Link></li>
                    <li><Link to ={`category/embutidos`}>EMBUTIDOS</Link></li>
                    <li><Link to ={`category/cervezas`}>CERVEZAS</Link></li>
                </ul>
            </div> 
            <div className="container-cart">
                <CartWidget/>
            </div>   
        </div>    
    </header>
    );
}

export default NavBar;