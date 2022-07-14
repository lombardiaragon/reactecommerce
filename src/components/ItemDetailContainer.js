import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../Services/products.services"
import ItemDetail from './ItemDetail'

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
        <div className="bg-light">
            <nav className="mt-3" aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item">Library</li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
            <ItemDetail product={product}/>
        </div>
    )
}
export default ItemDetailContainer