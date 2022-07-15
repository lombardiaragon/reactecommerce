import CartContext from "../Context/CartContext";
import { useContext } from "react";
import { Button,Badge } from "react-bootstrap";
import {Link} from 'react-router-dom'


const CartWidget=({toggleMyDrawer,showCartWidget})=> {
    const{cartList,quitFromCart,totalAcc}=useContext(CartContext)

  return (
       <>
        {showCartWidget && <div className='MyDrawerContainer' onClick={toggleMyDrawer}/>}
        <div className={`MyDrawer text-dark bg-light w-25 ${showCartWidget && "MyDrawerActive"}`}>
            <div className="d-flex flex-column">
                <div className="row bg-dark text-light d-flex flex-row justify-content-between align-items-center  py-3 px-2">
                    <span className="w-75 h4">MI CARRITO</span>
                    <Button type="button" className="h6 btn-close btn-close-white" aria-label="Close" onClick={toggleMyDrawer}></Button>
                </div>
                {cartList.map((item)=>{
                    const{title,pictureUrl,id,price,quantity}=item
                    return(
                    <div key={id} className='cartWidgetItems text-center align-items-stretch'>
                        <div className='cartWidgetItems__divImg'>
                            <img src={`/${pictureUrl}`} alt='ropa'/>
                        </div>
                        <div className='cartWidgetItems__divInfo ms-3 d-flex justify-content-center flex-column  align-items-start w-50'>
                            <p className=" m-0">{title}</p>
                            <span>
                                <Badge bg="secondary">Cantidad: {quantity}</Badge>
                            </span>
                        </div>
                        <div className="flex-grow-1 position-relative d-flex flex-column align-items-start justify-content-center">
                            <Button onClick={()=>quitFromCart(item)} type='button'
                            className="h6 btn btn-outline-dark btn-close position-absolute top-0 end-0" aria-label="Close">
                            </Button>
                            <span >Total</span>
                            <span > ${price*quantity}</span>
                        </div>
                    </div>
                    )}
                )}
                <div className="mt-5 card p-3">
                    <span className="text-center">Subtotal: ${totalAcc}</span>
                    <Link to={'./carrito'} className='text-decoration-none text-dark '>
                        <Button type="button" className="btn btn-secondary mt-2 w-100">
                            Terminar compra
                        </Button>
                    </Link>
                </div>
            </div>
        </div>     
        </>
   
  );
}

export default CartWidget