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
        const db = firestore.collection("products");
        const dataQuery = db.where("id", "==", id).get()
        dataQuery
        .then((res) => {
                
            setDetails(res.docs.map(p => ({id: p.id, ...p.data()})))  
      })
    },[id])
    const { addToCart } = useContext(CartContext)
    console.log(details)
    console.log(id)
    return (
        <>
        {details !== []
            ? <ItemDetail detailsData={details}/> 
            :
            <Loader/>
            }
           
        </>
    )
}

export default ItemDetailContainer
