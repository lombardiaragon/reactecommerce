import Item from "./Item"
const ItemList=({myProducts})=>{

    return(
        <div className="ItemList d-flex flex-wrap justify-content-evenly my-5">
            {myProducts.map((product)=>{
                return(
                    <Item key={product.id} product={product}/>
                )
            })
        }
        </div>
    )
}
export default ItemList