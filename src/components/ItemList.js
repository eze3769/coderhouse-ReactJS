import React, { useState, useEffect } from 'react'
import { firestore } from '../firebaseConfig';
import Item from './Item';
import Loader from './Loader';

const ItemList = ({selection}) => {    
   
        const [items, setItems] = useState([])
        
        useEffect(() => {
            const db = firestore.collection("products");
            const data = db.get("value")
            const dataQuery = db.where("category", "==", selection.selected).get("value")
            if (selection.selected === "all"){
                data
                .then((res) => {
                
                    setItems(res.docs.map(p => ({id: p.id, ...p.data()})))  
              })
            .catch((error) => {
                console.log(error)
              })
            }else{
                dataQuery
                .then((res) => {
                
                    setItems(res.docs.map(p => ({id: p.id, ...p.data()})))  
              })
            .catch((error) => {
                console.log(error)
              })
            }
            
        }, [selection])
        
      console.log(selection)
    return (
        <>
                    {items.length > 0  
                    ?
                        items.map((Items)=>{
                        return(
                                <Item key={Items.id} id={Items.id} itemName={Items.name} price={Items.price} img={Items.image} description={Items.description} stock={Items.stock}/>
                        )})   
                : 
                        <Loader/>
                }
                </>
                
    )
}

export default ItemList 
