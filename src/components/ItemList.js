import Item from "./Item"
const ItemList=({myProducts})=>{

    console.log(myProducts)
    return(
        <div className="ItemList">
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