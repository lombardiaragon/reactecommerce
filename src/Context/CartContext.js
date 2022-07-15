import { createContext, useState } from "react";

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartList, setCartList]=useState([])

    const addToCart=(product)=>{
        setCartList([...cartList,product])
    }
    const quitFromCart=(item)=>{
        setCartList(cartList.filter((el)=>el.id !== item.id))
    }

    const data={
        cartList,
        setCartList,
        addToCart,
        quitFromCart
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