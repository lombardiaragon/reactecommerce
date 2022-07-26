import { Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import CartContext from "../../Context/CartContext"
import { useContext, useState } from "react"

const CartListItem=({item})=>{
    const{quitFromCart,toUpdateQuantity}=useContext(CartContext)
    const{title,price,pictureUrl,stock}=item
    const[stateQuantity,setStateQuantity]=useState(item.quantitySelected || 1)
    item.quantitySelected=stateQuantity

    const toAdd=()=>{
        if(stateQuantity<stock){
            setStateQuantity(stateQuantity+1)
            toUpdateQuantity(item)
        }
    }
    const toRest=()=>{
        setStateQuantity(stateQuantity-1)
        toUpdateQuantity(item)
    }
    
    return(
        <Card className='mb-5 cartCards w-100'>
            <Card.Header className='d-flex justify-content-between'>
                <h5>{title}</h5>
                <Button onClick={()=>quitFromCart(item)} className='btn-close btn-secondary'></Button>
            </Card.Header>
            <Card.Body className='container-fluid'>
                <div className='row justify-content-around align-items-center'>
                    <div className='col-12 col-md-6 p-2 '>
                        <Card.Img variant="start" src={`./${pictureUrl}`} alt='ropa' className=' p-2 cartCards__img '/>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column justify-content-center p-3 h-100'>
                        <div className='text-center'>
                            <Card.Text className=''>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <p className=''>${price*stateQuantity}</p>
                        </div>
                        <div className="col mt-md-0 d-flex justify-content-center align-items-center pb-3 pb-sm-2">
                            <Button type="button" className="btn-dark" onClick={toRest} disabled={stateQuantity===1}>-</Button>
                            <span className="mx-3">{stateQuantity}</span>
                            <Button type="button" className="btn-dark" onClick={toAdd}>+</Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CartListItem