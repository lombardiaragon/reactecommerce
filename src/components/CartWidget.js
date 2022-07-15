import CartContext from "../Context/CartContext";
import { useContext } from "react";

const CartWidget=({toggleMyDrawer,showCartWidget})=> {
    const{cartList,quitFromCart}=useContext(CartContext)

  return (
       <>
        {showCartWidget && <div className='MyDrawerContainer' onClick={toggleMyDrawer}/>}
        <div className={`MyDrawer text-dark bg-light w-25 ${showCartWidget && "MyDrawerActive"}`}>
            <div className="mt-5 p-2 container">
                <h3>TITULO DRAWER</h3>
                {cartList.map((item)=>{
                    const{title,pictureUrl,id,price,quantity}=item
                    return(
                    <div key={id} className='cartWidgetItems text-center align-items-stretch'>
                        <div className='cartWidgetItems__divImg'>
                            <img src={`/${pictureUrl}`} alt='ropa'/>
                        </div>
                        {/* <div className='cartWidgetItems__divInfo d-flex flex-column'> */}
                        <div className='cartWidgetItems__divInfo d-flex justify-content-center flex-column w-50'>
                            <p className=" m-0">{title}</p>
                            <span className="">Cantidad: {quantity}</span>
                        </div>
                        {/* <div className="cartWidgetItems__checkOut position-relative d-flex flex-column"> */}
                        <div className="flex-grow-1 position-relative d-flex flex-column justify-content-center">
                            <button onClick={()=>quitFromCart(item)} type='button' className="btn btn-outline-dark btn-close position-absolute top-0 end-0" aria-label="Close"/>
                            <span >Total: ${price*quantity}</span>
                        </div>
                    </div>
                    )}
                )}
            </div>
            <button type="button" className="btn-close MyDrawerClose" aria-label="Close" onClick={toggleMyDrawer}></button>
        </div>     
        </>
   
  );
}

export default CartWidget