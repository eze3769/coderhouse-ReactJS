import React,{createContext, useState, useEffect} from 'react'

export const CartContext = createContext();

const { Provider} = CartContext


const CustomProvider = ({ children }) => {
    let [ cartList, setCartList]= useState([])
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

    },[cartList])

    const cartLoad = () =>{
        if (localStorage.getItem("cart") !== null){
            let cart = JSON.parse(localStorage.getItem("cart"))
            setCartList(cart)}
    }
    const addToCart = (item, counter) => {
        
        if (item.stock >= counter){
        if(isInCart(item)){
            const getCart = JSON.parse(localStorage.getItem("cart"))
            const findProduct = getCart.findIndex(i => i.id === item.id)
            getCart[findProduct].cantidad = getCart[findProduct].cantidad + counter
            localStorage.setItem("cart",JSON.stringify(getCart))
            setCartList(getCart)
        }else{
            let newItem = {
                id : item.id,
                imagen : item.image,
                nombre : item.name,
                precio : item.price,
                cantidad : counter
            }
            let cart = [];
            if(localStorage.getItem("cart") != null){
                cart = JSON.parse(localStorage.getItem("cart"))
            }
            cart.push(newItem)

            localStorage.setItem("cart", JSON.stringify(cart))
            setCartList(cart)
    }
    }
    };
    const isInCart = (item) => {
        if (localStorage.getItem("cart") == null){
            return false
        }else{
            const getCart = JSON.parse(localStorage.getItem("cart"))
            const isIt = getCart.find(p => p.id ===item.id)
            if (isIt === undefined){
                return false
            }
            else {
                return true
            }
        }
        
    }

    const cartClean = () => {
        localStorage.removeItem("cart")
        setCartList([])
    };
  
    const itemDelete = (id) => {
        const newCart = cartList.filter(product => product.id !== id)
        setCartList(newCart)
        localStorage.setItem("cart",JSON.stringify(newCart))
    };
  
    return (
      <Provider
        value={{cartList,cartLoad, addToCart, cartClean, itemDelete, quantity, total}}
      >
        {children}
      </Provider>
    );
  };

  export default CustomProvider