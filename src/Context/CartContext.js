import { createContext, useState } from "react";

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartList, setCartList]=useState([])

  
    const addToCart=(product)=>{
        let isInCart=cartList.some((el)=>el.id===product.id)
        if(!isInCart){
            setCartList([...cartList,product])
        }
    }
    const quitFromCart=(item)=>{
        setCartList(cartList.filter((el)=>el.id !== item.id))
    }

    const mapPrices=cartList.map((el)=>el.price*el.quantitySelected)
    const totalAcc=mapPrices.reduce((acc,price)=>acc+price,0)   

    const data={
        cartList,
        setCartList,
        addToCart,
        quitFromCart,
        totalAcc
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext 
export {CartProvider}