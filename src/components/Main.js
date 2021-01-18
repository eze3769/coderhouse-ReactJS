import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Cart from './Cart'
import Contact from './Contact'
import Home from './Home'
import ItemDetailContainer from './ItemDetailContainer'
import Products from './Products'
import Us from './Us'
const Main = () => {

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
            <Route path="/producto/:id">
                <ItemDetailContainer/>
            </Route>
            </Switch>
        </main>
    )
}

export default Main
