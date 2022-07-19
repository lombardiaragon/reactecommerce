import Modal from 'react-bootstrap/Modal';
import FormContact from './FormContact';

const MyModal=(props)=> {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Formulario de confirmación de compra
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContact/>
      </Modal.Body>
    </Modal>
  );
}

export default MyModal