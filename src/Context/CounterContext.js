import { createContext } from "react";
import { useState } from "react";
const CounterContext=createContext()

const CounterProvider=({children})=>{
    const [quantity,setQuantity]=useState(1)

    const toAdd=(stock)=>{
        if(quantity<stock){
            setQuantity(quantity+1)
        }
    }
    const toRest=()=>{
        setQuantity(quantity-1)
    }

    const data={
        toRest,
        toAdd,
        quantity
    }

    return(
        <CounterContext.Provider value={data}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContext
export {CounterProvider}