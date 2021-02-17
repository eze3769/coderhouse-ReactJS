import React,{useContext,useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Cart from './Cart'
import Contact from './Contact'
import Finish from './Finish'
import Home from './Home'
import Checkout from './Checkout'
import ItemDetailContainer from './ItemDetailContainer'
import Products from './Products'
import Us from './Us'
import { CartContext } from './CartContext'
const Main = () => {
const {cartLoad} = useContext(CartContext)
useEffect(()=>{
    cartLoad()
},[])

    return (
        <main>
            <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/productos">
                <Products/>
            </Route>
            <Route path="/nosotros">
                <Us/>
            </Route>
            <Route path="/contacto">
                <Contact/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
            <Route path="/finish">
                <Finish/>
            </Route>
            <Route path="/checkout/:orderId">
                <Checkout/>
            </Route>
            <Route path="/producto/:id">
                <ItemDetailContainer/>
            </Route>
            </Switch>
        </main>
    )
}

export default Main
