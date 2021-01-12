import React, {useState} from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({details}) => {
    
    return (
        <div>
            <div>
                <img className="description__img" src={details.imagen} alt=""/>
            </div>
            <div>
                <p>{details.nombre}</p>
                <p>{details.precio}</p>
                <ItemCount/>
            </div>
            <div>
                <p>Descripcion</p>
                <p>{details.descripcion}</p>
            </div>    
        </div>
    )
}

export default ItemDetail
