import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown,faUser} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useState } from 'react';


const MyNavBar=()=>{
    const[showCartWidget,setShowCartWidget]=useState(false)

    return(
        <>
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid>
                <Link to={'/'}>
                    <Navbar.Brand>MI LOGO</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link>Home</Nav.Link>
                        <NavDropdown title="Productos" id="navbarScrollingDropdown">
                            <NavDropdown.Item >Remeras</NavDropdown.Item>
                            <NavDropdown.Item >Buzos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>OnSale</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>Ayuda</Nav.Link>
                        <Nav.Link>Contacto</Nav.Link>
                    </Nav>
                    <Nav className='w-50 d-flex align-items-center justify-content-end'>
                        <Nav.Link className='d-flex align-items-center' onClick={()=>setShowCartWidget(!showCartWidget)}>
                            <FontAwesomeIcon icon={faCartArrowDown} className='mx-1'/>Mi Carrito
                        </Nav.Link>
                        <Nav.Link><FontAwesomeIcon icon={faUser} className='mx-1'/>Mi Perfil</Nav.Link>
                    </Nav>
                    {/* <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {showCartWidget && <CartWidget showCartWidget={showCartWidget} setShowCartWidget={setShowCartWidget}/>  }
        </>
        )
}

export default MyNavBar