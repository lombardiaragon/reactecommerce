import ItemCount from "./ItemCount"
import SliderProducts from "./SliderProducts"
import InfoItemDetail from "./InfoItemDetail"
import FormItemDetail from "./FormItemDetail"

const ItemDetail=({product})=>{
    const{title,pictureUrl,price}=product

    return(
        <>
        <div className="d-flex justify-content-between bg-light m-5 img-thumbnail shadow-sm p-5 ">
            <div className=" w-50 d-flex justify-content-center p-4">
                <img src={`/${pictureUrl}`} alt='imagen producto' className="ItemDetail__img rounded"/>
            </div>
            <div className=" w-50 container d-flex flex-column justify-content-around p-4">
                <InfoItemDetail title={title} price={price}/>
                <FormItemDetail/>
                <ItemCount product={product}/>
            </div>
        </div>
        <SliderProducts/>
        </>
    )
}
export default ItemDetail