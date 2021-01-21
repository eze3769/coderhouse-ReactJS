import React,{useState, useEffect, useContext} from 'react'
import ItemCount from './ItemCount'
import {NavLink} from 'react-router-dom'
import { CartContext } from './CartContext';

const ItemDetail = ({detailsData}) => {
    const [detailCounter, setDetailCounter] =useState(0)
    const { cartList } = useContext(CartContext)

    useEffect(()=>{
        setDetailCounter(cartList)
    },[cartList])
    console.log(cartList)
    return (
        <>
            <h3>{detailsData.nombre}</h3>
            <div className="row">       
            <div className="col l5 s12 center"> 
                <img className="valign-wrapper responsive-img" src={detailsData.imagen} alt=""/>
            </div>
            <div className="col l7 s12 center"> 
                <h4>{detailsData.precio}</h4>
                <p>Stock: {detailsData.stock}</p>

                
                 <ItemCount details={detailsData} stock={detailsData.stock} />
                  <NavLink to="/cart" className="waves-effect waves-light btn red " >Terminar mi compra</NavLink>
                
               
                
            </div>
            </div>
            <div className="divider"></div>
            <div className="section col s12">
                <h5>Descripcion</h5>
                <p>{detailsData.descripcion}</p>
            </div>    
        </>
    )
}

export default ItemDetail
