import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import CartContext from '../Context/CartContext'
import Counter from '../components/Counter';
const Cart =()=>{
    const{cartList,totalAcc,quitFromCart}=useContext(CartContext)
    console.log(cartList)
    return(
        <>
        <h4>Mi Carrito</h4>
        <div className="w-100">
            {cartList.length===0 ?
                (<h3>NO HAY PRODUCTOS EN EL CARRITO</h3>)
                :
                (<div className="d-flex flex-row justify-content-between p-3">
                    <div className="d-flex flex-column w-50">
                        {cartList.map((item)=>{
                            const{pictureUrl,title,id,price,quantitySelected}=item
                            return(
                                <Card key={id} className='mb-2 cartCards w-100'>
                                    <Card.Header className='d-flex justify-content-between'>
                                        <h5>{title}</h5>
                                        <Button onClick={()=>quitFromCart(item)} className='btn-close btn-secondary'></Button>
                                    </Card.Header>
                                    <Card.Body className='d-flex w-100 h-75'>
                                        <Card.Img variant="start" src={`./${pictureUrl}`} alt='ropa' className='cartCards__img' />
                                        <div className='d-flex flex-column justify-content-around align-items-start px-4 cartCards__info'>
                                            <div className='d-flex'>
                                                <Card.Text className='pe-3'>
                                                    With supporting text below as a natural lead-in to additional content.
                                                </Card.Text>
                                                <p className='text-center'>Precio: ${price*quantitySelected}</p>  
                                            </div>
                                            <Counter product={item}/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })} 
                    </div>
                    <Card className="bg-warning cardResume">
                        <div className='h-100 w-100 d-flex flex-column justify-content-between'>
                            <Card.Header>
                                <h5>RESUMEN DE MI PEDIDO</h5>
                            </Card.Header>
                            <div className='p-3 pb-0'>
                                <p>Cantidad de productos en carrito: 5</p>
                                <p>Entrega: Gratis</p>
                                <p>TOTAL: ${totalAcc}</p>
                            </div>
                            <Card.Footer>
                                <Button className='btn-dark w-100'>IR A PAGAR</Button>                
                            </Card.Footer>
                        </div>
                    </Card>
                </div>)
            }
        </div>
    </>
    )
}
export default Cart