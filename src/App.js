import React, {useEffect} from "react"
import M from 'materialize-css'
import NavBar from './components/NavBar'
import {BrowserRouter} from 'react-router-dom'
import Main from "./components/Main"


const App = () =>{
    useEffect(()=>{
        M.AutoInit()
    },[])
    return (
            <BrowserRouter>
                <NavBar/>
                <div className="container">
                    <Main/>
                </div>
                
            </BrowserRouter>
    )

}
export default App 