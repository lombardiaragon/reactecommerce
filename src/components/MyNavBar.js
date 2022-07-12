import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartArrowDown,faUser} from '@fortawesome/free-solid-svg-icons'


const MyNavBar=()=>{
    return(
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <NavDropdown title="Productos" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Remeras</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Buzos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">OnSale</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#action2">Ayuda</Nav.Link>
                    <Nav.Link href="#action2">Contacto</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#action1" ><FontAwesomeIcon icon={faCartArrowDown} className='mx-2'/>Mi Carrito</Nav.Link>
                    <Nav.Link href="#action1"><FontAwesomeIcon icon={faUser} className='mx-2'/>Mi Perfil</Nav.Link>
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
        )
}

export default MyNavBar