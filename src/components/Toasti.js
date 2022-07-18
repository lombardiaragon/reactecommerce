import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';
import  Button  from 'react-bootstrap/Button';
import { useContext } from 'react';
import CartWidgetContext from '../Context/CartWidgetContext';



const Toasti=({showMyToast,showToast})=>{
    const{toggleMyDrawer}=useContext(CartWidgetContext)
    return(
        <>
        <ToastContainer>
            <Toast className='position-fixed bottom-0 start-0 m-2 myToasti bg-light'
             onClose={() => showMyToast()} show={showToast} delay={1500} autohide>
                <div className='toast-header d-flex justify-content-between'>
                    <FontAwesomeIcon icon={faCheck} className='rounded'/>
                    <strong className="mx-2">Producto agregado al carrito</strong>
                    <button type="button" className="btn-close" onClick={showMyToast}></button>
                </div>
                <Toast.Body className='text-center'>
                    <Button className='btn-success' onClick={toggleMyDrawer}>Ir al Carrito</Button>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    
     </>
    )
}
export default Toasti