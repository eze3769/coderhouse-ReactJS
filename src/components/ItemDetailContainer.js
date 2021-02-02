import React, { useState,useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { firestore } from '../firebaseConfig';
import { CartContext } from './CartContext';
import ItemDetail from './ItemDetail'
import Loader from './Loader';
 

const ItemDetailContainer = () => {
    let [details,setDetails] = useState([])
    const {id} = useParams(); 
    useEffect(()=>{
        const db = firestore
        const item = db.collection("products").doc(id)   
        item.get()
        .then((res) => {
           if(!res.exists){
               return false;
           }else{
               setDetails({id: res.id, ...res.data()})
           }
      })
    },[id])
    const { addToCart } = useContext(CartContext)
    return (
        <>
        {details !== []
            ?<> 
            <ItemDetail detailsData={details}/> 
            </>
            :
            <Loader/>
            }
           
        </>
    )
}

export default ItemDetailContainer
