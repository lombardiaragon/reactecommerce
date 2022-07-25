import { createContext, useState } from "react";

const CartContext=createContext()

const CartProvider=({children})=>{
    const[cartList, setCartList]=useState([])
    const[showToastAdd, setShowToastAdd]=useState(false)
    const[showToastNotAdd, setShowToastNotAdd]=useState(false)

    const toastToAdd=()=>{
        setShowToastAdd(!showToastAdd)
    }
    const toastNotToAdd=()=>{
        setShowToastNotAdd(!showToastNotAdd)
    }
    const addToCart=(product)=>{
        let isInCart=cartList.some((el)=>el.id===product.id)
        if(!isInCart){
            setCartList([...cartList,product])
            toastToAdd()
        }
        else{
            toastNotToAdd()
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
        totalAcc,
        toastToAdd,
        toastNotToAdd,
        showToastAdd,
        showToastNotAdd
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext 
export {CartProvider}

//alert('nuevo agregado')
                // Swal.fire({
                //     position: 'center',
                //     icon: 'success',
                //     title: 'Producto agregado al carrito',
                //     showConfirmButton: false,
                //     timer: 2000,
                //     showConfirmButton:true,
                //     confirmButtonText:
                //     '<Link>Ir al Carrito</Link>',
                //     confirmButtonColor: '#3085d6',
                // })