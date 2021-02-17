import React,{useContext,useEffect} from 'react'
import { CartContext } from './CartContext';
import {Link} from 'react-router-dom'

const Cart = () => {
const{cartList, cartClean, itemDelete, quantity, total} = useContext(CartContext)

useEffect(()=>{
    
},[cartList])

    return (
        <>
        <h2>
            Mi pedido
        </h2>
        {quantity === 0 ?
            <>
            <p>No hay productos en el carrito</p>
            <Link to="/productos" className="waves-effect waves-light btn">Ir a comprar</Link>
            </>
            :   <>
                <ul className="collection">
                {cartList.map((cartList)=>{
            return(
                    
                    <li className="collection-item avatar" key={cartList.id}>
                    <img src={cartList.imagen} alt="{cartList.nombre}" className="circle"/>
                    <span className="title">{cartList.nombre}</span>
                    <p>Precio (por unidad): {cartList.precio} <br></br>
                        Cantidad: {cartList.cantidad}
                    </p>
                    <a href="#!" onClick={() => itemDelete(cartList.id)} className="secondary-content"><i className="material-icons">delete</i></a>
                    </li>      
            )})   
            }  
            </ul>
            <ul className="collection">
                <li className="collection-item">Productos en el carrito: {quantity}</li>
                <li className="collection-item">Total: {total}</li>
            </ul>
            <div>
            <Link to="/productos" className="waves-effect waves-light btn">Volver a la tienda</Link>
            <button  onClick={cartClean} className="waves-effect waves-light btn red ">Vaciar carrito</button>
            <Link to="/finish" className="waves-effect waves-light btn right">Finalizar compra</Link>
            </div>

            </>

        }
            
        </>
    )
}

export default Cart
