import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { firestore } from '../firebaseConfig';
import ItemDetail from './ItemDetail'
import Loader from './Loader';
 

const ItemDetailContainer = () => {
    let [details,setDetails] = useState([])
    const [routeExist, setRouteExist] = useState(false)
    const {id} = useParams(); 
    useEffect(()=>{
        const db = firestore
        const item = db.collection("products").doc(id)   
        item.get()
        .then((res) => {
           if(!res.exists){
               setRouteExist(false)
               return false;
           }else{
               setDetails({id: res.id, ...res.data()})
               setRouteExist(true)
           }
      })
    },[id])
    return (
        <>
        {details !== []
            ?<> 
            <ItemDetail detailsData={details} verifyExistance={routeExist}/> 
            </>
            :
            <Loader/>
            }
           
        </>
    )
}

export default ItemDetailContainer
