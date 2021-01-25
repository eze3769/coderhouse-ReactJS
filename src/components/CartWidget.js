import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import { CartContext } from './CartContext';

const CartWidget = () => {

    const {quantity} = useContext(CartContext)
    return (
        <div className={quantity == 0 ?  "icon-container hide" : "icon-container"} >

            <NavLink to="/cart" className="cart__icon"><i className="material-icons">shopping_cart</i></NavLink>
            <p className="cart__number">{quantity}</p>
        </div>
    )
}

export default CartWidget

