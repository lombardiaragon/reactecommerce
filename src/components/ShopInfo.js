import '../scss/index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruckFast,faShop,faCreditCard,faCommentDollar} from '@fortawesome/free-solid-svg-icons'


const ShopInfo=()=>{
    return(
        <div className='ShopInfo'>
            <ul className='ShopInfo__list'>
                <li className='ShopInfo__list__item'><FontAwesomeIcon icon={faShop} /><span>Nuestra Tienda</span></li>
                <li className='ShopInfo__list__item'><FontAwesomeIcon icon={faCreditCard} /><span>Todas las tarjetas</span></li>
                <li className='ShopInfo__list__item'><FontAwesomeIcon icon={faTruckFast} /><span>Envío gratis</span></li>
                <li className='ShopInfo__list__item'><FontAwesomeIcon icon={faCommentDollar} /><span>Descuentos Exclusivos</span></li>
            </ul>
        </div>
    )
}

export default ShopInfo