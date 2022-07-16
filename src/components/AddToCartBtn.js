import CartContext from "../Context/CartContext"
import { useContext } from "react"
import { Button } from "react-bootstrap"

const AddToCartBtn=({product})=>{
    const{addToCart}=useContext(CartContext)
    return(
        <Button type='button' className="btn btn-warning row w-100 m-auto" onClick={()=>addToCart(product)}>
         Agregar al Carrito
        </Button>
    )
}

export default AddToCartBtn