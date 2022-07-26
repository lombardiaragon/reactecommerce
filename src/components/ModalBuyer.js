import MyModal from "./MyModal"
import FormContact from "./Forms/FormContact"
import Modal from 'react-bootstrap/Modal';


const ModalBuyer=({success,setSuccess,showCartModal,setShowCartModal})=>{
    return(
        <MyModal  show={showCartModal} onHide={() => setShowCartModal(!showCartModal)}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Formulario de confirmación de compra
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {success ? 
                    (<div>
                        <p>Orden generada!</p>
                        <p>Numero de orden: {success}</p>
                    </div>)
                :
                    (<FormContact setSuccess={setSuccess}/>)
                }
            </Modal.Body>
        </MyModal>
    )
}
export default ModalBuyer