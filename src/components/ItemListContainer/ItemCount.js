import Counter from "../Counter"
import AddToCartBtn from "../AddToCartBtn"

const ItemCount=({product})=>{

    return(
        <div className="row gap-2 row-cols-1 w-100 mx-0 mt-5">
            <Counter product={product}/>
            <AddToCartBtn product={product}/>
        </div>
    )
}
export default ItemCount