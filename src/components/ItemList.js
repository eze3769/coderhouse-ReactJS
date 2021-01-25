import React, { useState, useEffect } from 'react'
import Item from './Item';
import Loader from './Loader';

const ItemList = ({selection}) => {    
    var baseDeDatos = [
        {
            id : 1,
            nombre: 'Shampoo de Pelo Graso',
            descripcion: '-Aceite de Jojoba.\n- Té verde.\n- Arcilla verde.\n- Aceites esenciales de limón y menta.',
            precio: 360,
            stock: 4,
            imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/11/shampoo-limon-y-menta-150x150.jpg'
        },{
            id : 2,
            nombre: 'Shampoo de Pelo Normal',
            descripcion: '- Aceite de ricino.\n- Manteca de karité.\n- Arcilla blanca.\n- Aceites esenciales de jazmín y naranja.',
            precio: 360,
            stock: 2,
            imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/11/shampoo-jazmin-y-naranja-150x150.jpg'
        },{
            id :3,
            nombre: 'Shampoo de Pelo Seco',
            descripcion: '- Aceite de almendras dulces.\n- Manteca de karité.\n- Avena.\n- Arcilla roja.\n- Aceites esenciales de lavanda y tea tree.',
            precio: 360,
            stock: 3,
            imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/11/shampoo-tea-tree-y-lavanda-150x150.jpg'
        },{
            id : 4,
            nombre: 'Vela de soja',
            descripcion: '- Duran más que las de parafina, y su olor se desprende más rápido.\n- Son amigables con el medio ambiente.\n- Dejan un aroma riquísimo!\n- Aceites esenciales de limón y menta.',
            precio: 380,
            stock: 1,
            imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/12/vela-de-cera-de-soja-150x150.png'
        }];
        const [items, setItems] = useState([])

        useEffect(() => {
            const traerDatos = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(baseDeDatos)
                },2000)
                
            },[])
            traerDatos
            .then(resolve=>{
                if (selection.selected === "all"){
                    setItems(resolve)      
                }else{
                    const filtered = baseDeDatos.filter(products => products.categoria === selection.selected)
                    setItems(filtered)
                }
                      
            })    
        }, [selection.selected])
        
      console.log(selection)
    return (
        <>
                    {items.length > 0  
                    ?
                        items.map((Items)=>{
                        return(
                                <Item key={Items.id} id={Items.id} itemName={Items.nombre} price={Items.precio} img={Items.imagen} description={Items.descripcion} stock={Items.stock}/>
                        )})   
                : 
                        <Loader/>
                }
                </>
                
    )
}

export default ItemList 
