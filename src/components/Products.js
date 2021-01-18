import React, {useState} from 'react'
import ItemListContainer from './ItemListContainer'

const Products = () => {
    
    const [selection, setSelection] = useState("all")
    const productSelect = event =>{
        setSelection(event.target.id)
    }
    
    return (
        <>
        <div className="row">
    <div className="col s12">
      <ul className="tabs">
        <li className="tab col s3"><a id="all" onClick={productSelect} className="active" href="#test1">Todo</a></li>
        <li className="tab col s3"><a id="shampoo"onClick={productSelect} href="#test2">Shampoo</a></li>
        <li className="tab col s3"><a id="velas"onClick={productSelect} href="#test3">Velas</a></li>
        <li className="tab col s3"><a id="jabones"onClick={productSelect} href="#test4">Jabones</a></li>
      </ul>
      <h2>
            Productos
        </h2>
        <div className="row">
        <p>Mostrando:</p>
    </div>
    <div id="test1" className="col s12">Todo</div>
    <div id="test2" className="col s12">Shampoo</div>
    <div id="test3" className="col s12">Velas</div>
    <div id="test4" className="col s12">Jabones</div>
  </div>
  </div>
        <ItemListContainer selected={selection} />
        </>
    )
}

export default Products
