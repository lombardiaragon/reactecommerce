import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from "react";
import CartContext from '../Context/CartContext'
import Counter from '../components/Counter';
import BannerFooter from '../components/BannerFooter';
import MyModal from '../components/MyModal';

const Cart =()=>{
    const{cartList,totalAcc,quitFromCart}=useContext(CartContext)
    const[showCartModal,setShowCartModal]=useState(false)
    return(
        <>
       
        <div className="w-100">
            <div className='my-5 px-3'>
                <h1 className=''>MI CARRITO</h1>
                <i>¡COMPRÁ AHORA Y PAGÁ EN 6 CUOTAS! Podés pagar con tus tarjetas Visa, MasterCard o American Express hasta en 6 cuotas sin interés.</i>
            </div>

            {cartList.length===0 ?
                (<h3>NO HAY PRODUCTOS EN EL CARRITO</h3>)
                :
                (<div className="d-flex flex-row justify-content-between p-3">
                    <div className="d-flex flex-column w-50">
                        {cartList.map((item)=>{
                            const{pictureUrl,title,id,price,quantitySelected}=item
                            return(
                                <Card key={id} className='mb-5 cartCards w-100'>
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
                                                <p className='text-center'>${price*quantitySelected}</p>  
                                            </div>
                                            <Counter product={item}/>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })} 
                    </div>
                    <Card className="bg-warning bg-opacity-75 cardResume">
                        <div className='h-100 w-100 d-flex flex-column justify-content-between'>
                            <Card.Header>
                                <h5>RESUMEN DE MI PEDIDO</h5>
                            </Card.Header>
                            <div className='px-3 h-100 d-flex flex-column justify-content-around'>
                                <p className='mb-0'>Entrega: Gratis</p>
                                <p className='fs-5 mb-0'>TOTAL <i>({cartList.length} productos)</i>: ${totalAcc}</p>
                                <i>Pagá en 6 cuotas sin interés</i>
                            </div>
                            <Card.Footer>
                                <Button className='btn-dark w-100' onClick={()=>setShowCartModal(!showCartModal)}>IR A PAGAR</Button>                
                            </Card.Footer>
                        </div>
                    </Card>
                </div>)
            }
        </div>
        {showCartModal && 
        <MyModal  show={showCartModal} onHide={() => setShowCartModal(!showCartModal)}/>}
        <BannerFooter/>
    </>
    )
}
export default Cart