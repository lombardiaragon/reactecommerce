import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../Services/products.services"
import ItemDetail from './ItemDetail'
import MyBreadCrumb from "./MyBreadCrumb"
import Loader from "./Loader"

const ItemDetailContainer=()=>{
    const {id}=useParams()
    const[product, setProduct]=useState({})
    useEffect(()=>{
        getProduct(id)
        .then((prod)=>{
            if(prod!=='error!'){
                setProduct(prod)
            }
        })
    },[id])

    return(
        <>
        {Object.keys(product).length === 0 ?
        <Loader/>:
        (<div className="bg-light">
            <MyBreadCrumb/>
            <ItemDetail product={product}/>
        </div>)
        }
        </>
    )
}
export default ItemDetailContainer