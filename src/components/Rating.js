import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

const Rating=()=>{
    return(
        <div className="d-flex flex-row ms-1">
            <span className="text-warning"><FontAwesomeIcon icon={faStar}/></span>
            <span className="text-warning"><FontAwesomeIcon icon={faStar}/></span>
            <span className="text-warning"><FontAwesomeIcon icon={faStar}/></span>
            <span className="text-warning"><FontAwesomeIcon icon={faStar}/></span>
            <span className="text-warning"><FontAwesomeIcon icon={faStar}/></span>
        </div>
    )
}

export default Rating