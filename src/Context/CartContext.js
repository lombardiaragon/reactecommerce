import { createContext, useState } from "react";

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartList, setCartList]=useState([])

    const addToCart=(product)=>{
        setCartList([...cartList,product])
    }

    const data={
        cartList,
        setCartList,
        addToCart
    }
    console.log(cartList)

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext 
export {CartProvider}