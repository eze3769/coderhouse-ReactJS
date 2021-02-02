import React,{createContext, useState, useEffect} from 'react'

export const CartContext = createContext();

const { Provider} = CartContext


const CustomProvider = ({ children }) => {
    let [cartList, setCartList] = useState([])
    const [ quantity, setQuantity ] = useState(0)
    const [ total, setTotal ] = useState(0)


    useEffect (()=>{
        let totalCart = 0
        if (cartList !== []){
            const totalCost = cartList.map(item => item.precio * item.cantidad)
            totalCost.map(item => totalCart = totalCart + item)
            setTotal(totalCart)
            let cartQuantity = 0
            cartList.map(item => cartQuantity= cartQuantity + item.cantidad)
            setQuantity(cartQuantity)
        }

    },[cartList,quantity,total])
  
    const addToCart = (details, counter) => {
        
        if(isInCart(details,cartList)){
            const findProduct = cartList.findIndex(item => item.id === details.id)
            cartList[findProduct].cantidad = cartList[findProduct].cantidad + counter
            setCartList([...cartList])
        }else{
            const newItem = {
                id : details.id,
                imagen : details.image,
                nombre : details.name,
                precio : details.price,
                cantidad : counter
            }
            setCartList([...cartList, newItem]) 
            
            
        
    }
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
  
    const itemDelete = (id) => {
        const newCart = cartList.splice(id,1)
        setCartList(newCart)
    };
  
    return (
      <Provider
        value={{ cartList, addToCart, cartClean, itemDelete, quantity, total}}
      >
        {children}
      </Provider>
    );
  };

  export default CustomProvider