import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckFast,faShop,faCreditCard,faCommentDollar} from '@fortawesome/free-solid-svg-icons'


const ShopInfo=()=>{
    return(
    <div className='p-0'>
        <ul className='bg-warning list-group list-unstyled d-flex flex-row flex-wrap p-3 justify-content-around mx-4 my-5 rounded-pill'>
            <li className='p-1'><FontAwesomeIcon icon={faShop} /><span className='ms-2'>Nuestra Tienda</span></li>
            <li  className='p-1'><FontAwesomeIcon icon={faCreditCard} /><span className='ms-2'>Todas las tarjetas</span></li>
            <li  className='p-1'><FontAwesomeIcon icon={faTruckFast} /><span className='ms-2'>Envío gratis</span></li>
            <li  className='p-1'><FontAwesomeIcon icon={faCommentDollar} /><span className='ms-2'>Descuentos Exclusivos</span></li>
        </ul>
    </div>
    )
}

export default ShopInfo