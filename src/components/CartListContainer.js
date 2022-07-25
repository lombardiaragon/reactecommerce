import { useContext } from "react"
import CartContext from "../Context/CartContext"
import CartListItem from "./CartListItem"

const CartListContainer=()=>{
    const{cartList}=useContext(CartContext)

    return(
        <div className="col-12 col-md-5 d-flex flex-column">
        {cartList.map((item)=>{
        return(
            <CartListItem key={item.id} item={item}/>
        )
        })}
    </div>
    )
}

export default CartListContainer