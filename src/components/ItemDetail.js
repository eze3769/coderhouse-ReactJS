import React,{useContext} from 'react'
import ItemCount from './ItemCount'
import {NavLink} from 'react-router-dom'
import { CartContext } from './CartContext';
const ItemDetail = ({detailsData}) => {
const {quantity} = useContext(CartContext)

    return (
        <>
            <h3>{detailsData.name}</h3>
            <div className="row">       
            <div className="col l5 s12 center"> 
                <img className="valign-wrapper responsive-img" src={detailsData.image} alt=""/>
            </div>
            <div className="col l7 s12 center"> 
                <h4>{detailsData.price}</h4>
                <p>Stock: {detailsData.stock}</p>

                
                 <ItemCount details={detailsData} />
                 {quantity !== 0 ?
                 <NavLink to="/cart" className="waves-effect waves-light btn red " >Terminar mi compra</NavLink>
                : <></>}
                  
                
               
                
            </div>
            </div>
            <div className="divider"></div>
            <div className="section col s12">
                <h5>Descripción</h5>
                <p>{detailsData.description}</p>
            </div>    
        </>
    )
}

export default ItemDetail
