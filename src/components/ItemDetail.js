const ItemDetail=({product})=>{
    const{title,pictureUrl,price}=product
    return(
        <div className="ItemDetail d-flex justify-content-between bg-light m-5 img-thumbnail shadow-sm p-5 ">
            <div className="ItemDetail__imgContainer w-50 d-flex justify-content-center p-4">
                <img src={`/${pictureUrl}`} alt='imagen producto' className="ItemDetail__img rounded"/>
            </div>
            <div className="ItemDetail__infoContainter  w-50 container p-4">
                <div className="row d-flex flex-column justify-content-between mb-3">
                    <h3 className="col">{title}</h3>
                    <span className="col my-3">${price} / reviews</span>
                    <p className="col">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed o consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dour sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className="row container">
                    <form className='formSizes row'>
                        <label className="mb-1">Talle</label>
                        <select className='selectSizes form-select m-auto' name="sizes">
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="extralarge">XL</option>
                        </select>
                    </form>
                    <form className='formColors row mt-3'>
                        <label className="mb-1">Color</label>
                        <select className='selectColors form-select m-auto' name="colors">
                            <option value="azul">Azul</option>
                            <option value="blanco">Blanco</option>
                            <option value="negro">Negro</option>
                        </select>
                    </form>
                </div>
                <button type='button' className="btn btn-warning row w-100 m-auto mt-5">Agregar al Carrito</button>

            </div>
        </div>
    )
}
export default ItemDetail