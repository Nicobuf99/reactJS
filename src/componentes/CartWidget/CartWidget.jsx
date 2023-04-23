import "./CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function Carrito() {
  const { cart } = useContext(cartContext);
  const count = cart.reduce((total, item) => total + item.count, 0);

  return (
    <Link to="/cart"
      type="button"
      className="btn btn-ligth boton-cart"
    >
      <FontAwesomeIcon className="cart-blanca" icon={faShoppingCart}/>
      <span
        id="contador-carrito"
        className="mt-0 top-0 end-2 translate-middle badge rounded-pill bg-white numero-cart"
      >
        {count}
        <span className="visually-hidden"></span>
      </span>
    </Link>
  );
}


export default Carrito;
