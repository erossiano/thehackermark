import React from 'react'
import { Link } from "react-router-dom";
//import Portada from "../../../images/inicio.jpg";

const Navbar = () => {
    return (
        <div className="inicio navbar navbar-expand-lg navbar-light bg-red">   
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/" className='nav-link'>
                    <h5>Home</h5>
                </Link>
            </li>
{/*             <li class="nav-item">
                <Link to="/productos" className='nav-link'>
                    <h5>Productos</h5>
                </Link>
            </li> */}
            <li className="nav-item">
                <Link to="/register" className='nav-link'>
                    <h5>Registro</h5>
                </Link>
            </li>
          </ul>   
            {/* <img src={Portada} alt=""/> */}
        </div>
    )
}

export default Navbar;