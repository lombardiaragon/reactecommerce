import Button  from "react-bootstrap/Button"
import AccordionHelp from "../components/AccordionHelp"
import SwiperCards from "../components/SwiperCards"

const Help =()=>{
    return(
        <div className="col text-light">
            <div className="helpTitle d-flex p-5 px-2 px-md-5 flex-column justify-content-center align-items-center text-center bg-secondary">
                <h1>¿NECESITAS AYUDA?</h1>
                <div className="m-3 input-group input-group-lg d-flex w-100 ">
                    <input className="btn-lg form-control" placeholder="¿En qué te ayudamos?"/>
                    <Button className="btn-warning">Buscar</Button>
                </div>
            </div>
            <AccordionHelp/>
            <div className="my-5 border-top border-bottom">
                <SwiperCards/>
            </div>
        </div>
        
    )
}
export default Help