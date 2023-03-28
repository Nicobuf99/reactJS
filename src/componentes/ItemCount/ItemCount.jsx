import React, {useState} from 'react';


function ItemCount() {
  
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={()=> count>1? setCount(count-1): false}>-</button>
      <span style={{margin: "5px"}}>{count}</span>
      <button onClick={()=> (count<5)? setCount(count+1): false}>+</button>
    </div>
  )
}

export default ItemCount;
