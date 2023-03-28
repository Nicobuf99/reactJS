import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({product}) {


    function addToCart() {
        alert("Producto agregado al carrito!");
      }

    return (
        <div className="conteiner-individual">
        <h1 className="h1-detail py-5">{product.title}</h1>
        <div className="imagen-texto">
            <div>
                <img src={product.imagen} alt={product.title} className="img-detail"/>
            </div>
            <div className="info-detail">
                <p>{product.informacion}</p>
                <p>Precio: ${product.price}</p>
                <div className="d-flex justify-content-evenly">
                    <ItemCount/>
                    <button onClick={addToCart} className="button-carrito">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail;