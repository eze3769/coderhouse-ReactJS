import React from 'react';

const NavBar = () => {
    return (
        <header>
            <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Mi tienda</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Home</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">¿Quiénes Somos?</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </div>
            </nav>
        </header>
        
    )
}

export default NavBar