import { useContext } from "react";
import CartContext from '../Context/CartContext'
const Cart =()=>{
    const{cartList,totalAcc,quitFromCart}=useContext(CartContext)
    console.log(cartList)
    return(
        <div>
            <h4>Mi Carrito</h4>
            <div className="d-flex">
            {cartList.length===0 ?
                (<h3>NO HAY PRODUCTOS EN EL CARRITO</h3>)
                :
                (<div>
                    {cartList.map((item)=>{
                        const{pictureUrl,title,id,price,quantity}=item
                        return(
                            <div key={id} className='cartView'>
                                <div className='cartView__divImg'>
                                    <img src={`./${pictureUrl}`} alt='ropa'/>
                                </div>
                                <h4>{title}</h4>
                                <div className='cartView__divInfo'>
                                    <span>Precio Unitario: ${price}</span>
                                    <span>Cantidad: {quantity}</span>
                                    <span>Precio Total: ${price*quantity}</span>
                                    <button onClick={()=>quitFromCart(item)} className='deleteItem'>x</button>
                                </div>
                            </div>
                        )
                    })}
                    <div className="bg-warning">
                        ORDER SUMMARY
                        TOTAL:{totalAcc}
                    </div>
                </div>)
            }
            </div>
        </div>
    )
}
export default Cart