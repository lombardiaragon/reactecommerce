import Item from "./Item"
const ItemList=({product})=>{
    return(
        <div className="ItemList">
            <Item product={product}/>
        </div>
    )
}
export default ItemList