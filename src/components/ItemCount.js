import React , { useState } from "react"

const ItemCount = () => {

    const [counter, setCounter] = useState(1)
    const counterUp = () =>{
        setCounter(counter + 1)
    } 
    const counterDown = () =>{
        if (counter > 1){
            setCounter(counter - 1)
        }
        
    }

    return (
        <div className="center">
        <div className="itemCounter">
            <a onClick={ counterDown } className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></a>
            <p className="countNumber">{counter}</p>
            <a onClick={ counterUp } className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></a>
        </div>
        <div className="itemAdd">
            <a className="waves-effect waves-light btn red ">Agregar al <i className="material-icons">shopping_cart</i></a>
        </div>
        </div>
    )
}

export default ItemCount
