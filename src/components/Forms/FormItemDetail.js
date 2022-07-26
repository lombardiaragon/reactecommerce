import { Form } from "react-bootstrap"

const FormItemDetail=()=>{
    return(
        <div className="row row-cols-2 m-0 my-3">
                <Form className="col">
                    <Form.Label>Color</Form.Label>
                    <Form.Select  name="colors">
                        <option value="azul">Azul</option>
                        <option value="blanco">Blanco</option>
                        <option value="negro">Negro</option>
                    </Form.Select>
                </Form>
                <Form className="col">
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