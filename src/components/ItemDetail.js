import React,{useContext,useEffect,useState} from 'react'
import ItemCount from './ItemCount'
import {NavLink} from 'react-router-dom'
import { CartContext } from './CartContext';
import Loader from './Loader';

const ItemDetail = ({detailsData,verifyExistance}) => {
const {quantity} = useContext(CartContext)
const [waitForSignal,setWaitForSignal] = useState(false)
useEffect(()=>{
    if (verifyExistance === false){
        setTimeout(() => {
        setWaitForSignal(true)
        }, 1500);
    }
     
},[verifyExistance])

    return (
        verifyExistance ?
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
        :
        waitForSignal ?
        <>
        <h2><i class="material-icons medium">warning</i> Lo que busca no existe</h2>
        <p>Verifique la ruta de navegación a la que intenta acceder.</p>
        </>
        :
        <Loader/>
    )
}

export default ItemDetail
