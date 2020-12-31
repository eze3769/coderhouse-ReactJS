import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

const App = () =>{
    return (
            <div>
                <NavBar/>
                <ItemListContainer item="sin items por el momento"/>
            </div>
    )

}
export default App 