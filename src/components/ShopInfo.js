import '../scss/index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckFast,faShop,faCreditCard,faCommentDollar} from '@fortawesome/free-solid-svg-icons'


const ShopInfo=()=>{
    return(
        <div className='p-0'>
            <ul className='bg-warning list-group list-unstyled d-flex flex-row p-3 justify-content-around m-4 rounded-pill'>
                <li><FontAwesomeIcon icon={faShop} /><span className='ms-2'>Nuestra Tienda</span></li>
                <li><FontAwesomeIcon icon={faCreditCard} /><span className='ms-2'>Todas las tarjetas</span></li>
                <li><FontAwesomeIcon icon={faTruckFast} /><span className='ms-2'>Envío gratis</span></li>
                <li><FontAwesomeIcon icon={faCommentDollar} /><span className='ms-2'>Descuentos Exclusivos</span></li>
            </ul>
        </div>
    )
}

export default ShopInfo