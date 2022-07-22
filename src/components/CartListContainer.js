import { Card } from "react-bootstrap"
import Counter from "./Counter"
import { useContext } from "react"
import CartContext from "../Context/CartContext"
import Button from "react-bootstrap/Button"

const CartListContainer=()=>{
    const{cartList,quitFromCart}=useContext(CartContext)
    return(
        <div className="col-12 col-md-5 d-flex flex-column">
        {cartList.map((item)=>{
        const{pictureUrl,title,id,price,quantitySelected}=item
        return(
        <Card key={id} className='mb-5 cartCards w-100'>
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
                            <p className=''>${price*quantitySelected}</p>
                        </div>
                        <Counter product={item}/>
                    </div>
                </div>
            </Card.Body>
        </Card>
        )
        })}
    </div>
    )
}

export default CartListContainer