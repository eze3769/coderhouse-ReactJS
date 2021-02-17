import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import { firestore } from '../firebaseConfig';
import Loader from './Loader';
import Orders from './Orders';


const Checkout = () => {
    const {orderId} = useParams(); 
    const [order,setOrder] = useState()
    useEffect(()=>{
        const db = firestore
        const item = db.collection("orders").doc(orderId)   
        item.get()
        .then((res) => {
           if(res.exists){
               setOrder(res.data())
           }
        })
    })
    return (
        order ? 
        <> 
            <h4>Pedido confirmado: # {orderId}</h4>
            <ul className="collection with-header">
                <li className="collection-header"><h5>Datos del comprador:</h5></li>
                <li className="collection-item">
                    <ul>
                        <li className="orders__list"><p className="orders__listTitle">Apellido y Nombre:</p><p>{`${order.lastName}, ${order.name}`}</p> </li>
                        <li className="orders__list"><p className="orders__listTitle">Teléfono:</p><p>{order.phone}</p>  </li>
                        <li className="orders__list"><p className="orders__listTitle">Email:</p><p>{order.email}</p> </li>
                        <li className="orders__list"><p className="orders__listTitle">Domicilio:</p><p>{order.address}</p> </li>
                        <li className="orders__list"><p className="orders__listTitle">Ciudad:</p><p>{order.city}</p> </li>
                        <li className="orders__list"><p className="orders__listTitle">Comentarios:</p><p>{order.comments}</p> </li>
                    </ul>
                    </li>
                <li className="collection-header"><h5>Datos del pedido:</h5></li>
                <li className="collection-item">
                    <ul>
                    {order.order.map((Items)=>{
                          return(    
                                  <Orders key={Items.id} id={Items.id} name={Items.nombre} price={Items.precio} image={Items.imagen}  quantity={Items.cantidad}/>
                          )})   }
                    </ul>
                </li>
            </ul>
        </>
        : <Loader/>
    )
}

export default Checkout
