import CartContext from "../Context/CartContext";
import { useContext } from "react";

const CartWidget=({toggleMyDrawer,showCartWidget})=> {
    const{cartList}=useContext(CartContext)

  return (
       <>
        {showCartWidget && <div className='MyDrawerContainer' onClick={toggleMyDrawer}/>}
        <div className={`MyDrawer text-dark bg-light w-25 ${showCartWidget && "MyDrawerActive"}`}>
            <div className="mt-5 p-3 container">
                <h3>TITULO DRAWER</h3>
                {cartList.map((item)=>{
                    const{title,pictureUrl,price,quantity}=item
                    return(
                    <div>
                        <div className="row">
                            
                        </div>
                        <div className="row">
                            <p>{title}</p>
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