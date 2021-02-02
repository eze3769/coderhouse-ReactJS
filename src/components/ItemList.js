import React, { useState, useEffect } from 'react'
import { firestore } from '../firebaseConfig';
import Item from './Item';
import Loader from './Loader';

const ItemList = ({selection}) => {    
   
        const [items, setItems] = useState([])
        const [posId, setPosId] = useState([])
        
        useEffect(() => {
            const db = firestore.collection("products");
            const data = db.get("value")
            const dataQuery = db.where("category", "==", selection.selected).get("value")
            if (selection.selected === "all"){
                data
                .then((res) => {
                
                    setItems(res.docs.map(p => ({id: p.id, ...p.data()})))  
                    setPosId()
              })
            .catch((error) => {
                console.log(error)
              })
            }else{
                dataQuery
                .then((res) => {
                
                    setItems(res.docs.map(p => ({ref: p.id, ...p.data()})))  
                    
              })
            .catch((error) => {
                console.log(error)
              })
            }
            
        }, [selection])
        
    return (
        <>
                    {items.length > 0  
                    ?
                        items.map((Items)=>{
                            console.log(Items)
                        return(
                                <Item key={Items.id} id={Items.id} name={Items.name} price={Items.price} image={Items.image} description={Items.description} stock={Items.stock}/>
                        )})   
                : 
                        <Loader/>
                }
                </>
                
    )
}

export default ItemList 
