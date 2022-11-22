import React from 'react'
import { Link } from "react-router-dom";
//import Portada from "../../../images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <Link to="/">
            <h5>home</h5>
            </Link>
            <Link to="/productos">
            <h5>Productos</h5>
            </Link>
            <Link to="/register">
            <h5>Registro</h5>
            </Link>
            {/* <img src={Portada} alt=""/> */}
        </div>
    )
}
