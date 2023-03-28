import React, {useState, useEffect} from "react";
import Flex from "../Flex/flex";
import ItemList from "../ItemList/ItemList";
import productsDatabase from "../../data/productsDatabase";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

function getItems() {
    const promesa = new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productsDatabase)
        }, 500)
    })
    return promesa
}

function getItemsByCategory(categoryURL) {
    const promesa = new Promise((resolve) => {
        setTimeout(()=>{
          const filtroNav =  productsDatabase.filter(item => item.category === categoryURL)
          resolve(filtroNav)
        }, 500)
    })
    return promesa
}

function ItemListContainer() {
    const [products, setProducts] = useState([])

    const {categoryid} = useParams()

    useEffect(()=>{
        if (!categoryid){
            getItems().then((respuesta) => {
            setProducts(respuesta)})
        }
        else {
            getItemsByCategory(categoryid).then((respuesta) => {
            setProducts(respuesta)})
        }
    }, [products])

    return (
        <div>
            <h1 className="h1-productos">NUESTROS PRODUCTOS</h1>
            <Flex>
                <ItemList products={products} />
            </Flex>
        </div>
    )
}

export default ItemListContainer;