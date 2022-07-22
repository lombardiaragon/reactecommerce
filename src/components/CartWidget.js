import CartContext from "../Context/CartContext";
import { useContext } from "react";
import EmptyCartWidget from "./EmtyCartWidget";
import CartWidgetContent from "./CartWidgetContent";
import CartWidgetTitle from "./CartWidgetTitle";

const CartWidget=({toggleMyDrawer,showCartWidget})=> {
    const{cartList}=useContext(CartContext)
  return (
       <>
        {showCartWidget && <div className='MyDrawerContainer d-flex' onClick={toggleMyDrawer}/>}
        <div className={`MyDrawer overflow-auto position-fixed d-flex flex-column text-dark bg-light w-25 ${showCartWidget && "MyDrawerActive"}`}>
            <div className="d-flex flex-column">
                <CartWidgetTitle/>
                <div className="d-flex flex-column ">
                {cartList.length===0 ?
                    (<EmptyCartWidget/>)
                    :
                    (
                        <CartWidgetContent/>
                    )
                }
                </div>
            </div>
        </div>     
        </>
   
  );
}

export default CartWidget