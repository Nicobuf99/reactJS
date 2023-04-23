import React from 'react';
import "./Loader.css"
import { DotWave } from '@uiball/loaders'


function Loader() {
  return (
<div className='loader'>
    <DotWave 
 size={80}
 speed={1} 
 color="white" 
/>
</div>
)
}

export default Loader;
