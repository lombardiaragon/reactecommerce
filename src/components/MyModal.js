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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <FormContact/>
      </Modal.Body>
    </Modal>
  );
}

export default MyModal