import ItemCount from "./ItemCount"
// import CartContext from "../Context/CartContext"
// import { useContext } from "react"

const ItemDetail=({product})=>{
    // const{addToCart}=useContext(CartContext)
    const{title,pictureUrl,price,stock}=product

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
                <div className="row d-flex flex-row justify-content-between m-0 p-0 w-100">
                    <form className='mb-1 ms-3 p-0 w-50'>
                        <label className="mb-1">Color</label>
                        <select className='form-select m-auto' name="colors">
                            <option value="azul">Azul</option>
                            <option value="blanco">Blanco</option>
                            <option value="negro">Negro</option>
                        </select>
                    </form>
                    <form className=' m-0 p-0 me-3 w-25'>
                        <label className="mb-1">Talle</label>
                        <select className='form-select m-auto' name="sizes">
                            <option value="small">S</option>
                            <option value="medium">M</option>
                            <option value="large">L</option>
                            <option value="extralarge">XL</option>
                        </select>
                    </form>
                </div>
                <ItemCount stock={stock} product={product}/>
                {/* <button type='button' className="btn btn-warning row w-100 m-auto mt-4" onClick={()=>addToCart(product)}>Agregar al Carrito</button> */}

            </div>
        </div>
    )
}
export default ItemDetail