import Spinner from 'react-bootstrap/Spinner';

const Loader=()=>{
    return(
        <div className='d-flex justify-content-center min-vh-100 align-items-center' >
            <Spinner animation="border"/>
        </div>
    )
}
export default Loader