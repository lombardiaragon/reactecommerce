import {Link} from 'react-router-dom'
const MyBreadCrumb=()=>{
    return(
    <nav className="mt-3" aria-label="breadcrumb">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to={'/'} className='text-dark'>Home</Link></li>
            <li className="breadcrumb-item"><Link to={'/productos'} className='text-dark'>Productos</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>        
    )
}
export default MyBreadCrumb