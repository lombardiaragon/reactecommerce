import { useState } from "react"
import { Link } from "react-router-dom"

const Item=({product})=>{
    const{title,price,id,pictureUrl}=product
    const[showBuyingBtn,setShowBuyingBtn]=useState(false)
    return(
        <Link to={`/item/${id}`} className='text-decoration-none text-dark'>
            <div className="ItemContainer" onMouseEnter={()=>setShowBuyingBtn(!showBuyingBtn)}>
                <div className="ItemContainer__divImg">
                    <img className="ItemContainer__divImg__img" src={`/${pictureUrl}`} alt='product'/>
                </div>
                <div className="ItemContainer__divInfo my-3 d-flex flex-column">
                    <h4 className="ItemContainer__divInfo__title h5">{title}</h4>
                    <span className="ItemContainer__divInfo__price h6">${price}</span>
                    <button type='button' className="btn btn-warning">Agregar al Carrito</button>

                </div>
              
            </div>
        </Link>
    )
}
export default Item