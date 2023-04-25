import React, { useState, useEffect } from "react";
import Flex from "../Flex/flex";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getItems, getItemsByCategory } from "../../services/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (!categoryid) {
      getItems().then((respuesta) => {
        setProducts(respuesta);
      });
    } else {
      getItemsByCategory(categoryid).then((respuesta) => {
        setProducts(respuesta);
      });
    }
  }, [categoryid]);

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className="h1-productos">NUESTROS PRODUCTOS</h1>
      <Flex>
        <ItemList products={products} />
      </Flex>
    </div>
  );
}

export default ItemListContainer;
