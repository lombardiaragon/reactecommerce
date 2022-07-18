import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import CartWidgetContext from "../Context/CartWidgetContext"
import { useContext } from "react"

const EmptyCartWidget=()=>{
    const{toggleMyDrawer}=useContext(CartWidgetContext)
    return(
        <div className="d-flex flex-column mt-5 align-items-center">
            <h5 className="mb-5 text-center">Su carrito está vacío</h5>
            <Link to={'/'}>
                <Button className="btn-secondary btn-lg" onClick={toggleMyDrawer}>Agregar productos al carrito</Button>
            </Link>
        </div>
    )
}
export default EmptyCartWidget