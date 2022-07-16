import { useState } from "react"
import { Link } from "react-router-dom"
import AddToCartBtn from "./AddToCartBtn"

const Item=({product})=>{
    const{title,price,id,pictureUrl}=product
    const[showBuyingBtn,setShowBuyingBtn]=useState(false)

    product.quantitySelected=1
    return(
            <div className="ItemContainer" onMouseEnter={()=>setShowBuyingBtn(!showBuyingBtn)}>
                <div className="ItemContainer__divImg">
                    <Link to={`/item/${id}`}>
                        <img className="ItemContainer__divImg__img" src={`/${pictureUrl}`} alt='product'/>
                     </Link>
                </div>
                <div className="ItemContainer__divInfo my-3 d-flex flex-column">
                    <h4 className="ItemContainer__divInfo__title h5">{title}</h4>
                    <span className="ItemContainer__divInfo__price h6">${price}</span>
                    {/* <Button type='button' className="btn btn-warning">Agregar al Carrito</Button> */}
                    <AddToCartBtn product={product}/>
                </div>
            </div>
    )
}
export default Item