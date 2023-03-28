import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {

  return (
    <div className={`item-card ${props.category}`} id={props.id}>
      <h3 className="item-card-header">{props.title}</h3>
      <img src={props.imagen} className="item-card-img" alt="imagen"></img>
      <h4 className="precio-cards">${props.price}</h4>
      <Link to={`/item/${props.id}`}>
        <button className="detalle">Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;
