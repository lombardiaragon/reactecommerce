import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { useContext } from "react"
import CartContext from "../Context/CartContext"
import CartWidgetContext from "../Context/CartWidgetContext"

const CartWidgetResume=()=>{
    const{totalAcc}=useContext(CartContext)
    const{toggleMyDrawer}=useContext(CartWidgetContext)
    return(
        <div className="mt-3 card p-3">
            <span className="text-center">Subtotal: ${totalAcc}</span>
            <Link to={'./carrito'} className='text-decoration-none text-dark '>
                <Button type="button" className="btn btn-secondary mt-2 w-100" onClick={toggleMyDrawer}>
                    Terminar compra
                </Button>
            </Link>
        </div>
    )
}
export default CartWidgetResume