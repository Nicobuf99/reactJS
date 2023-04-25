import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../../services/firestore";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((respuesta) => {
      console.log("promesa cumplida", respuesta);
      setProduct(respuesta);
    });
  }, [id]);

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
