import { ToastContainer } from 'react-bootstrap';

const Toasti=({children})=>{
    return(
        <ToastContainer className='position-relative '>
            {children}
        </ToastContainer>
    )
}
export default Toasti