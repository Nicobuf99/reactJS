import React, {useState, useEffect} from "react";
import productsDatabase from "../../data/productsDatabase";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetail from "../ItemDetail/ItemDetail";

function getSingleItem(idURL){
    const promesa = new Promise((resolve) => {
        setTimeout(()=>{
            const filtroProducto = productsDatabase.find(item => {
                return (item.id === Number(idURL) )
            })
            resolve(filtroProducto)
        }, 1000)
    })
    return promesa
}

function ItemDetailContainer(){
    const [product, setProduct] = useState([]);

    let { id } = useParams();
    console.log(id)

    useEffect(()=>{
        getSingleItem(id).then((respuesta) => {
            console.log("promesa cumplida", respuesta); 
            setProduct(respuesta)})
    }, [])
    

    return(
        <ItemDetail product={product}/>
    )
}


export default ItemDetailContainer;