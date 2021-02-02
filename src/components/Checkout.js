import React from 'react'
import {useParams} from 'react-router-dom'

const Checkout = () => {
    const {orderId} = useParams(); 

    return (
        <>
            <h3>Pedido confirmado: {orderId}</h3>
        </>
    )
}

export default Checkout
