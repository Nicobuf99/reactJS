import "./CartWidget.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Carrito() {
    return(
        <Link to="/cart"
            type="button"
            className="btn btn-ligth boton-cart"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <FontAwesomeIcon className="cart-blanca" icon={faShoppingCart}/>
            <span
              id="contador-carrito"
              className="mt-0 top-0 end-2 translate-middle badge rounded-pill bg-white numero-cart"
            >
              0<span className="visually-hidden"></span>
            </span>
        </Link>
    )
}

export default Carrito;