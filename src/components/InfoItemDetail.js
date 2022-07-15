import Rating from "./Rating"

const InfoItemDetail=({title,price})=>{
    return(
        <div className="row d-flex flex-column justify-content-between mb-3">
            <h3>{title}</h3>
            <div className="d-flex my-3">
                <span className="me-1">${price}</span>
                <div class="vr"></div>
                <Rating/>
            </div>
            <p >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed o consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dour sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    )
}

export default InfoItemDetail