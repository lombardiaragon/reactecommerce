import CartContext from "../Context/CartContext"
import { useContext, useState } from "react"
import Toasti from "./Toasti"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Toast from 'react-bootstrap/Toast';
import  Button  from 'react-bootstrap/Button';
import CartWidgetContext from '../Context/CartWidgetContext';
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const AddToCartBtn=({product})=>{
    const{addToCart}=useContext(CartContext)
    const[showToast, setShowToast]=useState(false)
    const{toggleMyDrawer}=useContext(CartWidgetContext)

    const showMyToast=()=>{
        setShowToast(!showToast)
    }
    const inCart=true
    return(
        <>
            <Button type='button' className="btn btn-warning row w-100 m-auto my-0"
            onClick={()=>{addToCart(product);showMyToast()}}>
            Agregar al Carrito
            </Button>
            {showToast &&
            <Toasti>
                <Toast className='position-fixed bottom-0 start-0 m-3 myToasti bg-light'
                        onClose={() => showMyToast()} show={showToast} delay={3000} autohide>
                {inCart ?
                <>
                <div className='toast-header d-flex justify-content-between'>
                    <FontAwesomeIcon icon={faCheck} className='rounded'/>
                    <strong className="mx-2">Producto agregado al carrito</strong>
                    <button type="button" className="btn-close" onClick={showMyToast}></button>
                </div>
                <Toast.Body className='text-center'>
                    <Button className='btn-success' onClick={toggleMyDrawer}>Ir al Carrito</Button>
                </Toast.Body>
                </>
                :
                <div className='toast-header d-flex justify-content-between text-danger'>
                    <FontAwesomeIcon icon={faCheck} className='rounded'/>
                    <strong className="mx-2">El producto ya se encuentra en el carrito</strong>
                    <button type="button" className="btn-close" onClick={showMyToast}></button>
                </div>
                }
                </Toast>
            </Toasti>
            }
        </>

    )
}

export default AddToCartBtn