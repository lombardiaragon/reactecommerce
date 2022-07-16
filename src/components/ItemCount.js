// import { useState } from "react"

import Counter from "./Counter"
import AddToCartBtn from "./AddToCartBtn"

const ItemCount=({product})=>{

    return(
        <>
        <Counter product={product}/>
        <AddToCartBtn product={product}/>
        </>
    )
}
export default ItemCount