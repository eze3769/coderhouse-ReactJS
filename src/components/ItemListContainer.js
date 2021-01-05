import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({item}) => {
    
    return (
        <div className="container">
            <ul className="collection">
                <li className="collection-item">{item}
                <ItemCount/>
                </li>
            </ul>
        </div>
    )
}

export default ItemListContainer
