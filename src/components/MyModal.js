import Modal from 'react-bootstrap/Modal';

const MyModal=(props)=> {
  // console.log('en props recibe children,por ende no tengo q pasarle children',props)
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
  
    </Modal>
  );
}

export default MyModal