import React,{createContext, useState, useEffect} from 'react'

export const CartContext = createContext();

const {Consumer, Provider} = CartContext


const CustomProvider = ({ children }) => {
    let [cartList, setCartList] = useState([])
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState(0)


    useEffect (()=>{
        let totalCart = 0
        if (cartList != []){
            const totalCost = cartList.map(item => item.precio * item.cantidad)
            
            setTotal(totalCart)
            const cartQuantity = cartList.length
            setQuantity(cartQuantity)
        }
        
        console.log("total:"+ total)
        console.log("carrito:"+ cartList)
        console.log("cantidad:"+ quantity)

    },[cartList])
  
    const addToCart = (details, counter) => {
        
        if(isInCart(details,cartList)){
            const findProduct = cartList.findIndex(item => item.id === details.id)
            cartList[findProduct].cantidad = cartList[findProduct].cantidad + counter
            setCartList([...cartList])
        }else{
            const newItem = {
                id : details.id,
                nombre : details.nombre,
                precio : details.precio,
                cantidad : counter
            }
            setCartList([...cartList, newItem]) 
            
            
        
    }
    console.log(cartList)
    };
    const isInCart = (item, cart) => {
  
        const isIt = cart.find(p => p.id === item.id)
        if (isIt === undefined){
            return false
        }
        else {
            return true
        }
    }

    const cartClean = () => {
        setCartList([])
    };
  
    const itemDelete = () => {

    };
  
    return (
      <Provider
        value={{ cartList, addToCart, cartClean, itemDelete}}
      >
        {children}
      </Provider>
    );
  };

  export default CustomProvider