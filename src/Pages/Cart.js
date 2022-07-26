import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import CartContext from '../Context/CartContext'
import BannerFooter from '../components/BannerFooter';
import { Link } from 'react-router-dom';
import ModalBuyer from '../components/ModalBuyer';
import CartListContainer from '../components/Cart/CartListContainer';
import CartResume from '../components/Cart/CartResume';
import CartTitle from '../components/Cart/CartTitle';

const Cart =()=>{
    const{cartList}=useContext(CartContext)
    const[showCartModal,setShowCartModal]=useState(false)
    const [success, setSuccess] = useState()

    return(
        <>
        <div className="w-100 min-vh-100 d-flex flex-column justify-content-start">
            <CartTitle/>
            {cartList.length===0 ?
                (<div className='p-5 text-center card m-auto mt-4 w-75'>
                    <h3>NO HAY PRODUCTOS EN EL CARRITO</h3>
                    <Link to={'/productos'}>
                        <Button className='btn-secondary btn-lg m-auto mt-4'>AGREGAR PRODUCTOS</Button>
                    </Link>
                </div>
                )
                :
                (<div>
                    <div className='d-flex justify-content-center mb-5'>
                        <Link to={'/productos'}>
                            <Button className='btn-dark btn-lg m-auto mt-4 px-5'>SEGUIR COMPRANDO</Button>
                        </Link>
                    </div>
                    <div className="container-fluid p-3">
                        <div className='row justify-content-around'>
                            <CartListContainer/>
                            <CartResume showCartModal={showCartModal} setShowCartModal={setShowCartModal}/>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
        {showCartModal && 
        <ModalBuyer setShowCartModal={setShowCartModal} showCartModal={showCartModal} success={success} setSuccess={setSuccess}/>
        }
        <BannerFooter/>
    </>
    )
}
export default Cart


