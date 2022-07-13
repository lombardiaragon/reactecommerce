const Item=({product})=>{
    const{title,price,pictureUrl}=product
    return(
        <div className="ItemContainer">
            <div className="ItemContainer__divImg">
                <img className="ItemContainer__divImg__img" src={pictureUrl} alt='product'/>
            </div>
            <div className="ItemContainer__divInfo">
                <h4 className="ItemContainer__divInfo__title">{title}</h4>
                <span className="ItemContainer__divInfo__price">${price}</span>
            </div>
        </div>
    )
}
export default Item