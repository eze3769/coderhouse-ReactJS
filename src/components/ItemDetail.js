import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({detailsData}) => {
    
    return (
        <>
            <h3>{detailsData.nombre}</h3>
            <div className="row">       
            <div className="col l5 s12 center"> 
                <img className="valign-wrapper responsive-img" src={detailsData.imagen} alt=""/>
            </div>
            <div className="col l7 s12 center"> 
                <h4>{detailsData.precio}</h4>
                <ItemCount/>
            </div>
            </div>
            <div className="divider"></div>
            <div className="section col s12">
                <h5>Descripcion</h5>
                <p>{detailsData.descripcion}</p>
            </div>    
        </>
    )
}

export default ItemDetail
