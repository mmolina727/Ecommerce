import React from 'react'
import "../css/ItemCount.css";

const ItemCount = ( {initial, stock, onAdd} ) => {

    const[count,SetCount] = React.useState(1);

    const increase =()=>{
        return (count < stock) ? SetCount(count+1) : SetCount (count+0) ;
    }

    const decrease = ()=>{
        return (count > initial) ? SetCount(count-1) : SetCount (count+0) ;
    }

  return (
    <div >
      <div className='container-count'>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>
      <div>
        <button onClick={()=> onAdd(count)}>FINALIZAR COMPRA</button>
      </div>
    </div>
  )
}

export default ItemCount;
