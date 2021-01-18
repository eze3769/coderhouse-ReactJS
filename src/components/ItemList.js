import React, { useState, useEffect } from 'react'
import Item from './Item';

const ItemList = ({selection}) => {    
    var baseDeDatos = [
        {
            id : 0,
            nombre: 'Shampoo de Pelo Graso',
            descripcion: '-Aceite de Jojoba.\n- Té verde.\n- Arcilla verde.\n- Aceites esenciales de limón y menta.',
            precio: 360,
            imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/11/shampoo-limon-y-menta-150x150.jpg',
            categoria: 'shampoo'
        },{
            id : 1,
            nombre: 'Shampoo de Pelo Normal',
            descripcion: '- Aceite de ricino.\n- Manteca de karité.\n- Arcilla blanca.\n- Aceites esenciales de jazmín y naranja.',
            precio: 360,
            imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/11/shampoo-jazmin-y-naranja-150x150.jpg',
            categoria: 'shampoo'
        },{
            id :2,
            nombre: 'Shampoo de Pelo Seco',
            descripcion: '- Aceite de almendras dulces.\n- Manteca de karité.\n- Avena.\n- Arcilla roja.\n- Aceites esenciales de lavanda y tea tree.',
            precio: 360,
            imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/11/shampoo-tea-tree-y-lavanda-150x150.jpg',
            categoria: 'shampoo'
        },{
            id : 3,
            nombre: 'Vela de soja',
            descripcion: '- Duran más que las de parafina, y su olor se desprende más rápido.\n- Son amigables con el medio ambiente.\n- Dejan un aroma riquísimo!\n- Aceites esenciales de limón y menta.',
            precio: 380,
            imagen: 'https://aromarte.com.ar/wp-content/uploads/2020/12/vela-de-cera-de-soja-150x150.png',
            categoria: 'velas'
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
                        items.map((products)=>{
                        return(
                                <Item key={products.id} id={products.id} itemName={products.nombre} price={products.precio} img={products.imagen} description={products.descripcion}/>
                        )})   
                : 
                <div>
                <div className="preloader-wrapper valign-wrapper center-align active">
                    <div className="spinner-layer spinner-red-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                <p>Cargando..</p>
                </div>
                }
                </>
                
    )
}

export default ItemList 
