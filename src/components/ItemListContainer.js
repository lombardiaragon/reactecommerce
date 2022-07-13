import ItemList from "./ItemList"
import getProducts from "../Services/products.services"
import { useEffect,useState } from "react"

const ItemListContainer=()=>{
    const[myProducts,setMyProducts]=useState([])
    // const product={
    //     title:'remera',
    //     price:1500,
    //     description:'remera hombre',
    //     image:'./tienda2.jpg'
    // }
    useEffect(()=>{
        getProducts()
        .then((res)=>{
            setMyProducts(res)
        })
    },[])

    console.log(myProducts)
    return(
        <div>
            <ItemList myProducts={myProducts}/>
        </div>
    )
}
export default ItemListContainer