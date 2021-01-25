import React, {useEffect} from "react"
import M from 'materialize-css'
import NavBar from './components/NavBar'
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main"
import CustomProvider from "./components/CartContext"

const App = () =>{
    useEffect(()=>{
        M.AutoInit()
    },[])
    return (
            <BrowserRouter>
            <CustomProvider>
                <NavBar/>
                <div className="container">
                    <Main/>
                </div>
                
                </CustomProvider>
            </BrowserRouter>
    )

}
export default App 