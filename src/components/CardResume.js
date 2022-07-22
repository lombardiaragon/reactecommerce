import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

const CartResume=({showCartModal,setShowCartModal})=>{
    const{totalAcc,cartList}=useContext(CartContext)

    return(
        <Card className="col-12 col-md-4 mb-5 bg-warning bg-opacity-75 cardResume">
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
                    <Button className='btn-dark m-2 w-100' onClick={()=>setShowCartModal(!showCartModal)}>IR A PAGAR</Button>
                </Card.Footer>
            </div>
        </Card>                          
    )
}
export default CartResume