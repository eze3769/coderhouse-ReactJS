import React, {useEffect} from "react"
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main"
import CustomProvider from "./components/CartContext";

const App = () =>{
    useEffect(()=>{
        M.AutoInit()
        
    },[])
    
    return (
            <BrowserRouter>
            <CustomProvider>
                <NavBar/>
                <main>
                    <div className="container">
                        <Main/>
                    </div>
                </main>
                <Footer/>
                </CustomProvider>
            </BrowserRouter>
    )

}
export default App 