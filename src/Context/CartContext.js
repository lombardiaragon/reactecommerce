import { createContext,useEffect, useState } from "react";

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartList, setCartList]=useState(JSON.parse(localStorage.getItem('products')) || [])
    const[showToastAdd, setShowToastAdd]=useState(false)
    const[showToastNotAdd, setShowToastNotAdd]=useState(false)
    const[total,setTotal]=useState(0)
    const[updateState,setUpdateState]=useState(false)
    
    const toastToAdd=()=>{
        setShowToastAdd(!showToastAdd)
    }
    const toastNotToAdd=()=>{
        setShowToastNotAdd(!showToastNotAdd)
    }
    const addToCart=(product)=>{
        let isInCart=cartList.some((el)=>el.id===product.id)
        if(!isInCart){
            localStorage.setItem('products', JSON.stringify([...cartList, product]))
            setCartList([...cartList,product])
            toastToAdd()
        }
        else{
            toastNotToAdd()
        }
    }

    const toUpdateQuantity=(item)=>{
        let index=cartList.indexOf(item)
        console.log('index del elemento en el cartList',index)
        cartList[index].quantitySelected=item.quantitySelected
        setUpdateState(!updateState)
     }

    const quitFromCart=(item)=>{
        setCartList(cartList.filter((el)=>el.id !== item.id))
    }

     useEffect(()=>{
         let mapPrices=cartList.map((el)=>el.price*el.quantitySelected)
         let totalAcc=mapPrices.reduce((acc,price)=>acc+price,0)  
         setTotal(totalAcc)
     },[cartList,updateState])

    const data={
        cartList,
        setCartList,
        addToCart,
        quitFromCart,
        total,
        toastToAdd,
        toastNotToAdd,
        showToastAdd,
        showToastNotAdd,
        toUpdateQuantity
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext 
export {CartProvider}
