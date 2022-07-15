import { useState } from "react"
import CartContext from "../Context/CartContext"
import { useContext } from "react"
import { Button } from "react-bootstrap"

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
            <Button type="button" className="btn-dark" onClick={toRest} disabled={quantity===1}>-</Button>
            <span className="mx-3">{quantity}</span>
            <Button type="button" className="btn-dark" onClick={toAdd}>+</Button>
        </div>
        <Button type='button' className="btn btn-warning row w-100 m-auto mt-4" onClick={()=>addToCart(product)}>
            Agregar al Carrito
        </Button>
        </>
    )
}
export default ItemCount