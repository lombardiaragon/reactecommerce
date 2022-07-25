import { createContext, useState } from "react";
import Swal from 'sweetalert2';

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartList, setCartList]=useState([])
  
    const addToCart=(product)=>{
        let isInCart=cartList.some((el)=>el.id===product.id)
        if(!isInCart){
            setCartList([...cartList,product])
            // alert('nuevo agregado')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1500
              })
        }
        else{
            // alert('ya estaba')
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'El producto ya está en el carrito',
                showConfirmButton: false,
                timer: 1500
              })
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