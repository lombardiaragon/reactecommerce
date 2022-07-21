import ItemList from "./ItemList"
import getProducts from "../Services/products.services"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import BannerFooter from "./BannerFooter"
import Loader from "./Loader"
import SlideBanner from "./SlideBanner"

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
        <SlideBanner/>
        {Object.keys(myProducts).length === 0 ?
        <Loader/>:
        (<div className="p-0 min-vh-100">
            <ItemList myProducts={myProducts}/> 
        </div>)
        }
        <BannerFooter/>
        </>
    )
}
export default ItemListContainer