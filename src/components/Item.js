import React from 'react'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'

const Item = (props) => {
    return (
        <li>
        <div className="row">
            <div className="col s12 m2 ">
                <div className="card">
                  <div className="card-image ">
                    <img src={props.img} className="item-img " alt=""></img>
                  </div>
                  <div className="card-content">
                    <Link to={`/producto/${props.id}`}><h6 className="black-text ">{props.itemName}</h6></Link>
                    <p>$ {props.price}</p>
                  </div>
                  <div className="card-action ">
                  <ItemCount/>
                  </div>
                  </div>
            </div>
        </div>
        </li>
    )
}

export default Item
