import { Button } from "react-bootstrap"
import { useContext } from "react"
import CartWidgetContext from "../Context/CartWidgetContext"

const CartWidgetTitle=()=>{
    const{toggleMyDrawer}=useContext(CartWidgetContext)
    return(
        <div className="row bg-dark text-light d-flex flex-row justify-content-between align-items-center  p-3">
            <span className="w-75 h4">MI CARRITO</span>
            <Button type="button" className="h6 btn-close btn-close-white" aria-label="Close" onClick={toggleMyDrawer}/>
        </div>
    )
}
export default CartWidgetTitle