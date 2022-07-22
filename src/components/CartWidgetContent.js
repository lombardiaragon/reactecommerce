import { Button } from "react-bootstrap"
import { useContext } from "react"
import CartContext from "../Context/CartContext"
import { Badge } from "react-bootstrap"
import CartWidgetResume from "./CartWidgetResume"

const CartWidgetContent=()=>{
    const{cartList,quitFromCart}=useContext(CartContext)

    return(
    <div className="d-flex flex-column mt-2">
        {cartList.map((item)=>{
        const{title,pictureUrl,id,price,quantitySelected}=item
            return(
            <div key={id} className='cartWidgetItems text-center align-items-stretch'>
                <div className='cartWidgetItems__divImg'>
                    <img src={`/${pictureUrl}`} alt='ropa'/>
                </div>
                <div className='cartWidgetItems__divInfo ms-3 d-flex justify-content-center flex-column  align-items-start w-50'>
                    <p className=" m-0">{title}</p>
                    <span>
                        <Badge bg="secondary">Cantidad: {quantitySelected}</Badge>
                    </span>
                </div>
                <div className="flex-grow-1 position-relative d-flex flex-column align-items-start justify-content-center">
                    <Button onClick={()=>quitFromCart(item)} type='button'
                    className="h6 btn btn-outline-dark btn-close position-absolute top-0 end-0" aria-label="Close">
                    </Button>
                    <span >Total</span>
                    <span > ${price*quantitySelected}</span>
                </div>
            </div>)}
        )}
        <CartWidgetResume/>
    </div>
    )
}
export default CartWidgetContent