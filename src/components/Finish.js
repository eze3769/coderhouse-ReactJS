import React,{useState,useContext,useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { firestore} from '../firebaseConfig';
import firebase from 'firebase/app'
import { CartContext } from './CartContext';


const Finish = () => {
    const{cartList,cartClean,total} = useContext(CartContext)
    const [redirect,setRedirect] = useState(false)
    const [orderId, setOrderId] =useState()
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [email,setEmail] =useState()
    const [phone,setPhone] =useState()
    const [comments,setComments] =useState("-- sin comentarios --")
    const [address,setAddress] =useState()
    const[city, setCity] =useState();

    const db = firestore;
    const order = db.collection("orders");
    const newOrder = {
        name: name,
        lastName: lastName,
        email: email,
        phone: phone,
        comments: comments,
        address: address,
        city:city,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        order: cartList,
        total: total
    }
    const onFinish = () =>{
        order.add(newOrder)
        .then(({id})=>
        {setOrderId(id);
        })
        .finally(()=>{
            cartClean()
            setRedirect(true)
        })
        
        
    }
    
        
    return (
         redirect ? 
             <Redirect to={`/checkout/${orderId}`} />
            :
        
     
            <>
            <h2>Finaliza tu compra</h2>
            <h5>Ingrese sus datos:</h5>
            <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input onChange = {(e) => setName(e.target.value)} id="first_name" type="text" className="validate"/>
                      <label htmlFor ="first_name">Nombre</label>
                      </div>
                    <div className="input-field col s6">
                      <input onChange = {(e) => setLastName(e.target.value)} id="last_name" type="text" className="validate"/>
                      <label htmlFor ="last_name">Apellido</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input onChange = {(e) => setEmail(e.target.value)} id="email" type="email" className="validate"/>
                      <label htmlFor ="email">Email</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">phone</i>
                        <input onChange = {(e) => setPhone(e.target.value)} id="icon_telephone" type="tel" className="validate"/>
                        <label htmlFor ="icon_telephone">Teléfono</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input onChange = {(e) => setAddress(e.target.value)} id="address" type="text" className="validate"/>
                      <label htmlFor="address">Dirección</label>
                      </div>
                    <div className="input-field col s6">
                      <input onChange = {(e) => setCity(e.target.value)} id="city" type="text" className="validate"/>
                      <label htmlFor ="city">Ciudad</label>
                    </div>
                  </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea onChange = {(e) => setComments(e.target.value)} id="textarea1" className="materialize-textarea"></textarea>
                        <label htmlFor ="textarea1">Comentarios (*Opcional)</label>
                      </div>
                    </div>
                 
                </form>
            </div>
            <button onClick={onFinish} className="waves-effect waves-light btn red right">Finalizar</button>
        </>
    )
}

export default Finish
