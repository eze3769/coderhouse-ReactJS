import React , { useState , useEffect } from "react"
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'



const App = () =>{


    return (
            <div>
                <NavBar/>
                <ItemListContainer item="Jabón de Pera" />
            </div>
    )

}
export default App 