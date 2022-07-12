import ItemList from "./ItemList"

const ItemListContainer=()=>{
    const product={
        title:'remera',
        price:1500,
        description:'remera hombre',
        image:'./tienda2.jpg'
    }
    return(
        <div>
            <ItemList product={product}/>
        </div>
    )
}
export default ItemListContainer