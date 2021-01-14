import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = (item) => {
    return (
        <ul>
            <ItemList selection={item}/>
        </ul>
    )
}

export default ItemListContainer
