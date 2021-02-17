import React from 'react';
import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  
    return (
        <header>
            <nav>
            <div className="nav-wrapper">
              <NavLink to="/" className="brand-logo">Mi tienda</NavLink>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/productos">Productos</NavLink></li>
                <li><NavLink to="/nosotros">¿Quiénes Somos?</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
                <li><CartWidget/></li>
              </ul>
            </div>
            </nav>
        </header>
        
    )
}

export default NavBar