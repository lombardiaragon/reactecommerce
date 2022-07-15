import { Form } from "react-bootstrap"

const FormItemDetail=()=>{
    return(
        <div className="row d-flex flex-row justify-content-between m-0 p-0 w-100">
            <Form className="w-50 ps-0">
                <Form.Label>Color</Form.Label>
                <Form.Select  name="colors">
                    <option value="azul">Azul</option>
                    <option value="blanco">Blanco</option>
                    <option value="negro">Negro</option>
                </Form.Select>
            </Form>
            <Form className="w-50 pe-0">
                <Form.Label>Talle</Form.Label>
                <Form.Select name="sizes" className="editSelect">
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="extralarge">XL</option>
                </Form.Select>
            </Form>
        </div>
    )
}

export default FormItemDetail