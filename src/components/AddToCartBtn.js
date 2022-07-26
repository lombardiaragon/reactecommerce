import CartContext from "../Context/CartContext"
import { useContext } from "react"
import Toasti from "./Toasti"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Toast from 'react-bootstrap/Toast';
import  Button  from 'react-bootstrap/Button';
import CartWidgetContext from '../Context/CartWidgetContext';

const AddToCartBtn=({product})=>{
    const{addToCart,toastToAdd,toastNotToAdd,showToastAdd,showToastNotAdd}=useContext(CartContext)
    const{toggleMyDrawer}=useContext(CartWidgetContext)

    return(
    <>
        <Button type='button' className="col btn btn-warning  my-0"
        onClick={()=>{addToCart(product)}}>
        Agregar al Carrito
        </Button>
        {showToastAdd &&
        <Toasti>
            <Toast className='position-fixed overflow-hidden bottom-0 start-0 m-0 ms-1 mb-1 m-md-4 myToasti bg-light'
                    onClose={() => toastToAdd()} show={showToastAdd} delay={2000} autohide>
            <div className='toast-header d-flex justify-content-between p-3'>
                <FontAwesomeIcon icon={faCheck} className='rounded'/>
            <strong className="mx-2">PRODUCTO AGREGADO AL CARRITO</strong>
                <button type="button" className="btn-close" onClick={toastToAdd}></button>
            </div>
            <Toast.Body className='text-center'>
                <Button className='btn-success' onClick={toggleMyDrawer}>Ir al Carrito</Button>
            </Toast.Body>
            </Toast>
        </Toasti>
        }
        {showToastNotAdd &&
        <Toasti>
            <Toast className='position-fixed overflow-hidden bottom-0 start-0 m-0 ms-1 mb-1  m-md-4  myToasti bg-light'
                    onClose={() => toastNotToAdd()} show={showToastNotAdd} delay={2000} autohide>
            <div className='toast-header d-flex align-items-start justify-content-between p-3'>
            <strong className="mx-2 text-danger">EL PRODUCTO YA SE ENCUENTRA EN EL CARRITO</strong>
                <button type="button" className="btn-close" onClick={toastNotToAdd}></button>
            </div>
            <Toast.Body className='text-center'>
                <Button className='btn-success' onClick={toggleMyDrawer}>Ir al Carrito</Button>
            </Toast.Body>
            </Toast>
        </Toasti>
        }
    </>
    )
}

export default AddToCartBtn