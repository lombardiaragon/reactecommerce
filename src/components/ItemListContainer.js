import ItemList from "./ItemList"
import getProducts from "../Services/products.services"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer=()=>{
    const[myProducts,setMyProducts]=useState([])
    const{category}=useParams()

    useEffect(()=>{
        getProducts()
        .then((res)=>{
            category? setMyProducts(res.filter((el)=>el.category===category)):setMyProducts(res)
        })
    },[])

    return(
        <div>
            <ItemList myProducts={myProducts}/>
        </div>
    )
}
export default ItemListContainer