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
    console.log(cartList)
    const mapPrices=cartList.map((el)=>el.price*el.quantitySelected)
    const totalAcc=mapPrices.reduce((acc,price)=>acc+price,0)

    const data={
        cartList,
        setCartList,
        addToCart,
        quitFromCart,
        totalAcc
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