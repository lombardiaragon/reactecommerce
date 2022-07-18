import CartContext from "../Context/CartContext"
import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import Toasti from "./Toasti"

const AddToCartBtn=({product})=>{
    const{addToCart}=useContext(CartContext)
    const[showToast, setShowToast]=useState(false)

    const showMyToast=()=>{
        setShowToast(!showToast)
     
    }
    
    return(
        <>
            <Button type='button' className="btn btn-warning row w-100 m-auto my-0"
            onClick={()=>{addToCart(product);showMyToast()}}>
            Agregar al Carrito
            </Button>
            {showToast && <Toasti showMyToast={showMyToast} showToast={showToast}/>}
        </>

    )
}

export default AddToCartBtn