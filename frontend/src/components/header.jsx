import React from "react";
import Menu from "./menu";
import '../assets/css/header.css'

const Header = () => {
    return(
        <div className="nav">
            <div>
                <img className="logo" src="https://nosotros.tostao.com/wp-content/uploads/2020/04/cropped-Tostao_logo.png"></img>
            </div>
            <div className="menu-nav">
                <p>Inicio</p>
                <p>Menu</p>
                <p>Novedades</p>
                <p>Contacto</p>
                <Menu />
            </div>
        </div>
    )
}

export default Header;