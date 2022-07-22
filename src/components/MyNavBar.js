import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown,faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useContext } from 'react';
import CartWidgetContext from '../Context/CartWidgetContext';
import CartContext from '../Context/CartContext';
import Badge from 'react-bootstrap/Badge';


const MyNavBar=()=>{
    const{toggleMyDrawer,showCartWidget}=useContext(CartWidgetContext)
    const{cartList}=useContext(CartContext)

    return(
    <>
    <Navbar bg="dark" variant='dark' expand="lg" className='p-2'>
        <Container fluid>
            <Link to={'/'}  className='text-decoration-none'>
                <Navbar.Brand>MI LOGO</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: '220px' }}
                navbarScroll
                >
                    <Link to={'/'} className='text-decoration-none nav-link'>Home</Link>
                    <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <Link to={'productos/remeras'} className='text-decoration-none text-dark dropdown-item'>
                            <p className='mb-0 px-2'>Remeras </p>
                        </Link> 
                        <Link to={'productos/buzos'} className='text-decoration-none text-dark dropdown-item'>
                            <p className='mb-0 px-2'>Buzos</p>
                        </Link> 
                        <Link to={'productos/pantalones'} className='text-decoration-none text-dark dropdown-item'>
                            <p className='mb-0 px-2'>Pantalones</p>
                        </Link> 
                        <hr className="dropdown-divider"/>
                        <Link to={'/productos'} className='text-decoration-none text-dark dropdown-item'>
                            <p className='mb-0 px-2'>Todos</p>
                        </Link> 
                    </NavDropdown>
                    <Link to={'/ayuda'} className='text-decoration-none nav-link'>Ayuda</Link>
                </Nav>
                <Nav className='w-100 d-flex align-items-center justify-content-end'>
                    <Nav.Link className='d-flex align-items-center position-relative' onClick={toggleMyDrawer}>
                        <FontAwesomeIcon icon={faCartArrowDown} className='mx-1'/>Mi Carrito
                        {cartList.length!==0 && 
                        <Badge bg="warning text-dark position-absolute top-0 start-0">
                            {cartList.length}
                        </Badge>
                        }
                    </Nav.Link>
                    <Link to={'/'} className='text-decoration-none nav-link'>
                        <FontAwesomeIcon icon={faUser} className='mx-1'/>Mi Perfil
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <CartWidget toggleMyDrawer={toggleMyDrawer} showCartWidget={showCartWidget}/>
    </>
    )
}

export default MyNavBar