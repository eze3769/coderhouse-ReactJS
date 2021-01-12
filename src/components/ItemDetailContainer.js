import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'

const products = [
    {
        id : 0,
        nombre: 'Shampoo de Pelo Graso',
        descripcion: '-Aceite de Jojoba.\n- Té verde.\n- Arcilla verde.\n- Aceites esenciales de limón y menta.',
        precio: 360,
        imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/11/shampoo-limon-y-menta-150x150.jpg'
    },{
        id : 1,
        nombre: 'Shampoo de Pelo Normal',
        descripcion: '- Aceite de ricino.\n- Manteca de karité.\n- Arcilla blanca.\n- Aceites esenciales de jazmín y naranja.',
        precio: 360,
        imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/11/shampoo-jazmin-y-naranja-150x150.jpg'
    },{
        id :2,
        nombre: 'Shampoo de Pelo Seco',
        descripcion: '- Aceite de almendras dulces.\n- Manteca de karité.\n- Avena.\n- Arcilla roja.\n- Aceites esenciales de lavanda y tea tree.',
        precio: 360,
        imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/11/shampoo-tea-tree-y-lavanda-150x150.jpg'
    },{
        id : 3,
        nombre: 'Vela de soja',
        descripcion: '- Duran más que las de parafina, y su olor se desprende más rápido.\n- Son amigables con el medio ambiente.\n- Dejan un aroma riquísimo!\n- Aceites esenciales de limón y menta.',
        precio: 380,
        imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/12/vela-de-cera-de-soja-150x150.png'
    }];
 

const ItemDetailContainer = () => {
    let [details,setDetails] = useState()
    const {id} = useParams(); 
    useEffect(()=>{
        let request = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(products)
        },2000)})
    
    request
    .then(res =>{
        let selection = res.filter(element => element.id == id)[0]
        
        setDetails(selection)
        console.log(selection)
            
    })
    },[id])
    return (
        <>
        {details
            ? <ItemDetail details={details}/> 
            : <p>Cargando</p>}
           
        </>
    )
}

export default ItemDetailContainer
