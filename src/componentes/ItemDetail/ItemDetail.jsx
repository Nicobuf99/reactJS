import { React, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";

function ItemDetail({ product }) {
  const { cart, addItem } = useContext(cartContext);
  console.log(cart);

  function addToCart(count) {
    addItem(product, count);
  }

  return (
    <div className="conteiner-individual">
      <h1 className="h1-detail py-5">{product.title}</h1>
      <div className="imagen-texto">
        <div>
          <img
            src={product.imagen}
            alt={product.title}
            className="img-detail"
          />
        </div>
        <div className="info-detail">
          <p>{product.informacion}</p>
          <p>Precio: ${product.price}</p>
          <div className="d-flex justify-content-evenly">
            <ItemCount stock={product.stock} addToCart={addToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
