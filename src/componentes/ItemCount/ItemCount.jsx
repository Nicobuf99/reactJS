import React, {useState} from 'react';

function ItemCount(props) {
  
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={()=> count>1? setCount(count-1): false}>-</button>
      <span style={{margin: "5px"}}>{count}</span>
      <button onClick={() => (count < props.stock) ? setCount(count + 1) : false}>+</button>
      <button onClick={()=> props.addToCart(count)} className="button-carrito">
                        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount;
