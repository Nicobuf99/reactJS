import React from "react";
import "./cssItem.css"
import { Link } from "react-router-dom";


function Item(props) {
  return (
    <div className={`item-card ${props.category}`} id={props.id}>
      <h3 className="item-card-header">{props.title}</h3>
      <img src={props.imagen} className="item-card-img" alt="imagen"></img>
      <h5 className="precio-cards">${props.price}</h5>
      <Link to={`/item/${props.id}`}>
        <button className="detalle">Ver detalle</button>
      </Link>
      {props.stock < 100 && (
        <h5 className="h5-unidades">QUEDAN POCAS UNIDADES!</h5>
      )}
    </div>
  );
}

export default Item;
