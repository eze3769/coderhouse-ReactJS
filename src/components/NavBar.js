import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header>
            <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Mi tienda</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">¿Quiénes Somos?</a></li>
                <li><a href="#">Contacto</a></li>
                <li><CartWidget/></li>
              </ul>
            </div>
            </nav>
        </header>
        
    )
}

export default NavBar