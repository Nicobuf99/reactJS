import React from "react";
import "./CartTable.css";

function CartTable({ cart, getPriceInCart, removeItem }) {
  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th>PRODUCTO</th>
          <th>NOMBRE</th>
          <th>PRECIO POR UNIDAD</th>
          <th>CANTIDAD</th>
          <th>BORRAR DEL CARRITO</th>
          <th>PRECIO TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.id}>
            <td>
              <img src={item.imagen} alt={item.title} />
            </td>
            <td>
              <h5>{item.title}</h5>
            </td>
            <td>{item.price}</td>
            <td>{item.count}</td>
            <td>
              <button
                className="delete-button"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </td>
            <td>${item.price * item.count}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="6" className="td-totalprice">
            EL TOTAL A PAGAR POR TUS PRODUCTOS ES DE $ {getPriceInCart()}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CartTable;
