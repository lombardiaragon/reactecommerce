import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
const MyHero=()=>{
    return(
        <>
        <div className="p-5 overflow-hidden d-flex flex-column align-items-center justify-content-center text-center border-bottom bg min-vh-100">
            <h1 className="display-4 fw-bold">SOMOS LO QUE HACEMOS</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Pero sobre todo, somos lo que hacemos para cambiar lo que somos...</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <Link to={'/productos'}>
                        <Button type="button" className="btn btn-warning btn-lg px-4">Comprar ahora</Button>
                    </Link>
                </div>
            </div>
        </div>
    </>

    )
}
export default MyHero