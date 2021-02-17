import React,{useState,useContext,useEffect} from 'react'
import {Redirect} from 'react-router-dom'
import { firestore} from '../firebaseConfig';
import firebase from 'firebase/app'
import { CartContext } from './CartContext';
import Orders from './Orders';
import {Link} from 'react-router-dom'
import M from 'materialize-css'



const Finish = () => {
  useEffect(() => {
    M.AutoInit()
    
    }, [])
    const inputRef = React.useRef(null)

    const{cartList,cartClean,total} = useContext(CartContext)
    const [itemsOk,setItemsOk] = useState([])
    const [itemsNoStock, setItemsNoStock] = useState([])
    const [aproved, setAproved] = useState([])
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
      const dbProducts = db.collection("products");
      const cartProductsFind = dbProducts.where(firebase.firestore.FieldPath.documentId(), "in", cartList.map(p => p.id) );
      
      const cartQuery = cartProductsFind.get()
    //  const batch = db.batch();

      cartQuery
      .then((doc)=>{
        doc.forEach(function(p){
          const productFind = cartList.find(i => i.nombre == p.data().name)
          if (p.data().stock >= productFind.cantidad){
            itemsOk.push(
              {nombre:p.data().name, 
              id: productFind.id, 
              imagen:productFind.imagen,
              cantidad: productFind.cantidad,
              precio: productFind.precio
            })
            let ref = dbProducts.doc(productFind.id);
            ref.update({
              stock: firebase.firestore.FieldValue.increment(-productFind.cantidad)
            })
          }else{
            itemsNoStock.push(
              {nombre:p.data().name, 
              id: productFind.id, 
              imagen:productFind.imagen,
              cantidad: productFind.cantidad,
              precio: productFind.precio
            })
          }
        })
        
      })
      
      .then(()=>{
        if (itemsNoStock.length === 0){
           order.add(newOrder)
          .then(({id})=>
          {setOrderId(id)
            setAproved(true)
          return
          })
          
        }else{
          setAproved(false)
          const itemsNot = itemsNoStock.length
          if(itemsNot < 0){
          for (let i=0; i< itemsNot;i++){ 
            let ref = dbProducts.doc(itemsOk[i].id);
            const productFind = cartList.find(i => i.nombre == itemsOk[i].nombre)
            ref.update({            
              stock: firebase.firestore.FieldValue.increment(productFind.cantidad)
            }) 
          }}
          inputRef.current.click()           
          return false
        }
      })
    
    
 
    .then(()=>{
        if(aproved){
        cartClean()
        setRedirect(true)
      }
      
  })  
        
    }
  
        
    return (
         redirect && orderId!==undefined ? 
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
            
            <a ref={inputRef} className="waves-effect waves-light btn modal-trigger hide" href="#modal1">Modal</a>
            <div id="modal1" className="modal">
              <div className="modal-content">
                <h4>Problemas en la compra</h4>
                <ul><li>Los siguientes productos no poseen el stock requerido:</li> 
                {itemsNoStock.map((Items)=>{
                          return(    
                                  <Orders key={Items.id} id={Items.id} name={Items.nombre} price={Items.precio} image={Items.imagen}  quantity={Items.cantidad}/>
                          )})   }
                </ul>
            </div>
            <div className="modal-footer">
              
                <Link to="/productos" className="modal-close waves-effect waves-green btn-flat" className="waves-effect waves-light btn">Volver a la tienda</Link>
            </div>
          </div>
        </>
    )
}

export default Finish
