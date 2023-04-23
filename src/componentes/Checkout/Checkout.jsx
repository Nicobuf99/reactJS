import React from 'react';
import "./Checkout.css";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className='div-checkout'>
      <h1 className='h1-checkout'>Gracias por tu compra!</h1>
      <p className='p-checkout'>Le enviaremos por e-mail el estado de su pedido y los datos para pagar los productos</p>
      <Link to="/"><button className='boton-checkout'>Volver a la página principal</button></Link>
    </div>
  )
}

export default Checkout
