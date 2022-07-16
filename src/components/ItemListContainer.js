import ItemList from "./ItemList"
import getProducts from "../Services/products.services"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import BannerFooter from "./BannerFooter"

const ItemListContainer=()=>{
    const[myProducts,setMyProducts]=useState([])
    const{category}=useParams()

    useEffect(()=>{
        getProducts()
        .then((res)=>{
            category? (setMyProducts(res.filter((el)=>el.category===category))) : setMyProducts(res)
        })
    },[category])
    return(
        <>
        <div className="p-0">
            <ItemList myProducts={myProducts}/>
        </div>
        <BannerFooter/>
        </>
    )
}
export default ItemListContainer