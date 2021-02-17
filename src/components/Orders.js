import React from 'react'

const Orders = (props) => {
    return (
        <li className="collection-item avatar" key={props.id}>
                    <img src={props.image} alt="{cartList.nombre}" className="circle"/>
                    <span className="title">{props.name}</span>
                    <p>Precio (por unidad): {props.price} <br></br>
                        Cantidad: {props.quantity}
                    </p>
        </li>
    )
}

export default Orders
