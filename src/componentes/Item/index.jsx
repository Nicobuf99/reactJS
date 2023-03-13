import "./item.css";

function Item(props) {
  function addToCart() {
    alert("Producto agregado al carrito!");
  }

  return (
    <div className="item-card">
      <h3 className="item-card-header">{props.title}</h3>
      <img src={props.imagen} className="item-card-img" alt="imagen"></img>
      <h4 className="precio-cards">${props.price}</h4>
      <button onClick={addToCart} className="button-carrito">
        Agregar al carrito
      </button>
    </div>
  );
}

export default Item;
