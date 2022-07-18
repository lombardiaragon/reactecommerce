import { createContext } from "react";
import { useState } from "react";

const CartWidgetContext=createContext()

const CartWidgetProvider=({children})=>{
    const[showCartWidget,setShowCartWidget]=useState(false)
    
    const toggleMyDrawer=(e)=>{
        setShowCartWidget(!showCartWidget)
        console.log(showCartWidget)
    }
    const data={
        toggleMyDrawer,
        showCartWidget,
        setShowCartWidget
    }
    return(
        <CartWidgetContext.Provider value={data}>
            {children}
        </CartWidgetContext.Provider>
    )
}

export default CartWidgetContext
export {CartWidgetProvider}