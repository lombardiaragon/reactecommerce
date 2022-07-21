import Button  from "react-bootstrap/Button"

const Help =()=>{
    return(
        <div className="vh-100 p-0 text-light">
            <div className="d-flex flex-column justify-content-center align-items-center bg-secondary h-50">
                <h1>¿NECESITAS AYUDA?</h1>
                <div className="m-3 input-group input-group-lg d-flex w-75">
                    <input className="btn-lg form-control" placeholder="¿En qué te ayudamos?"/>
                    <Button className="btn-warning">Buscar</Button>
                </div>
            </div>
        </div>
        
    )
}
export default Help