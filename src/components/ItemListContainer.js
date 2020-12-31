import React from 'react'

const ItemListContainer = ({item}) => {
    
    return (
        <div class="container">
            <ul class="collection">
                <li class="collection-item">{item}</li>
            </ul>
        </div>
    )
}

export default ItemListContainer
