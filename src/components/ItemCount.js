import React , { useState,  useContext  } from "react"
import { CartContext } from './CartContext';


const ItemCount = ({details}) => {

    const [counter, setCounter] = useState(1)
    const stock = details.stock
    const counterUp = () =>{
        if(counter < stock){
            setCounter(counter + 1)}
    } 
    const counterDown = () =>{
        if (counter > 1){
            setCounter(counter - 1)
        }
        
    }
    const { addToCart } = useContext(CartContext)
    const clickToAdd =() =>{
        addToCart(details, counter)
    }
    
    
    return (
        
        details.stock > 0 ?    
        <div className="center">
        <div className="itemCounter">
            <button onClick={ counterDown } className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">remove</i></button>
            <p className="countNumber">{counter}</p>
            <button  onClick={ counterUp } className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">add</i></button>
        </div>
        
        <div className="itemAdd">
            <button  onClick={clickToAdd} className="waves-effect waves-light btn red ">Agregar al <i className="material-icons">shopping_cart</i></button>
        </div>
        </div>
        : 
        <p><i>Sin stock</i></p>
        
    )
}

export default ItemCount
