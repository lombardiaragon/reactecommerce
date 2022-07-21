import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';
import db from '../Utils/FireBase.config'
import { collection,addDoc } from 'firebase/firestore';

const FormContact=({success,setSuccess})=>{
    const{totalAcc,cartList,setCartList}=useContext(CartContext)
    const [formValue, setFormValue] = useState({
        user: '',
        phone: '',
        direction: '',
        email: '',
        validEmail:''
    })

    const [order, setOrder] = useState({
        date: new Date(),
        buyer: {},
        items: cartList.map( item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                quantitySelected: item.quantitySelected
            }
        } ),
        total: totalAcc
    })


    const handleSubmit=(e)=>{
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        sendOrder({...order, buyer: formValue})
        setCartList([])
    }
    const handleChange=(e)=>{
        console.log(e.target)
        setFormValue({...formValue, [e.target.name]: e.target.value})
    }

    const sendOrder = async (newOrder) => {
        const ordersCollectionFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(ordersCollectionFirebase, newOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
    }

    return(
        <Form  onSubmit={handleSubmit}>
            <Row className='mb-3'>
                <Col>
                    <Form.Control 
                    placeholder="Nombre" 
                    name='user'
                    value={formValue.name} 
                    onChange={handleChange}
                    required/>
                </Col>
                <Col>
                    <Form.Control 
                    placeholder="Nombre" 
                    name='user'
                    value={formValue.name} 
                    onChange={handleChange}
                    required />
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Control 
                placeholder="Dirección"
                name='user'
                value={formValue.name} 
                onChange={handleChange}
                required />
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Col sm={6}>
                    <Form.Control 
                    type="email" 
                    placeholder="Email"
                    name='user'
                    value={formValue.name} 
                    onChange={handleChange}
                    required />
                </Col>
                <Col sm={6}>
                <Form.Control 
                    type="email" 
                    placeholder="Valid email"
                    name='user'
                    value={formValue.name} 
                    onChange={handleChange}
                    required />
                </Col>
            </Form.Group>
            <hr className='mt-4'/>
            <div className='d-flex justify-content-center mt-3'>
                <Button className="btn btn-warning btn-lg" type="submit">Enviar solicitud de compra</Button>
            </div>
        </Form>
    )
}
export default FormContact