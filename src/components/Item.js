import React from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'

const Item = (props) => {

  
    return (
        <li>
        <div className="row ">
            <div className="col s12 m4 l3 center">
                <div className="card-panel hoverable">
                  <div className="card-image ">
                  <Link to={`/producto/${props.id}`}><img src={props.img} className="responsive-img " alt=""></img></Link>
                  </div>
                  <div className="card-content">
                    <Link to={`/producto/${props.id}`}><h6 className="black-text ">{props.itemName}</h6></Link>
                    <p>$ {props.price}</p>
                    <p>Stock: {props.stock}</p>
                  </div>
                  <div className="card-action ">
                    <ItemCount details={props}/>
                  </div>
                  </div>
            </div>
        </div>
        </li>
    )
}

export default Item
