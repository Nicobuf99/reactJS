import React from "react";
import Item from "../Item/Item";

function ItemList(props) {
    return (
        <>
            {props.products.map((producto) => (
                <Item
                    key={producto.id}
                    id={producto.id}
                    title={producto.title}
                    imagen={producto.imagen}
                    price={producto.price}
                    category={producto.category}
                    stock={producto.stock}
                    informacion={producto.informacion}
                />
            ))}
        </>
    );
}

export default ItemList;
