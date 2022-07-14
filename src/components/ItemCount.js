import { useState } from "react"
import CartContext from "../Context/CartContext"
import { useContext } from "react"

const ItemCount=({stock,product})=>{
    const{addToCart}=useContext(CartContext)
    const [quantity,setQuantity]=useState(1)

    const toAdd=()=>{
        if(quantity<stock){
            setQuantity(quantity+1)
        }
    }
    const toRest=()=>{
        setQuantity(quantity-1)
    }

    product.quantity=quantity
    return(
        <>
        <div className="mt-4 d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-outline-dark" onClick={toRest} disabled={quantity===1}>-</button>
            <span className="mx-3">{quantity}</span>
            <button type="button" className="btn btn-outline-dark" onClick={toAdd}>+</button>
        </div>
        <button type='button' className="btn btn-warning row w-100 m-auto mt-4" onClick={()=>addToCart(product)}>
            Agregar al Carrito
        </button>
        </>
    )
}
export default ItemCount