import SliderProducts from "../SliderProducts"
import InfoItemDetail from "../ItemListContainer/InfoItemDetail"
import FormItemDetail from "../Forms/FormItemDetail"
import ItemCount from '../ItemListContainer/ItemCount'
const ItemDetail=({product})=>{
    const{title,pictureUrl,price}=product

    return(
        <>
        <div className="container m-auto my-5 bg-light m-5 img-thumbnail shadow-sm p-2">
            <div className="row">
                <div className="d-flex justify-content-center p-4 col-sm-12 col-md-6 ">
                    <img src={`/${pictureUrl}`} alt='imagen producto' className="ItemDetail__img rounded"/>
                </div>
                <div className="container p-4 col-sm-12 col-md-6">
                    <InfoItemDetail title={title} price={price}/>
                    <FormItemDetail/>
                    <ItemCount product={product}/>
                </div>
            </div>
        </div>
        <SliderProducts/>
        </>
    )
}
export default ItemDetail