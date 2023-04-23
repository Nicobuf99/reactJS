import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ItemCount.css"

function ItemCount(props) {
  const [count, setCount] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = () => {
    setAddedToCart(true);
    props.addToCart(count);
  };

  if (addedToCart) {
    return (
      <div className='div-productoagregado'>
        <p>Producto agregado al carrito!</p>
        <button onClick={() => setAddedToCart(false)} className='button-agregarmasunidades'>Agregar más unidades</button>
        <Link to="/"><button className='button-productoagregado'>Volver a la pagina principal</button></Link>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => count > 1 ? setCount(count - 1) : false}>-</button>
      <span style={{ margin: '5px' }}>{count}</span>
      <button onClick={() => (count < props.stock ? setCount(count + 1) : false)}>+</button>
      <button onClick={addToCart} className="button-carrito">
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;

