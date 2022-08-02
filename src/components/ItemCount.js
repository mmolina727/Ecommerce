import React from 'react'
import "../css/ItemCount.css";

const ItemCount = ( {initial, stock} ) => {

    const[count,SetCount] = React.useState(1);

    const increase =()=>{
        return (count < stock) ? SetCount(count+1) : SetCount (count+0) ;
    }

    const decrease = ()=>{
        return (count > initial) ? SetCount(count-1) : SetCount (count+0) ;
    }

  return (
    <div className='container-count'>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
    </div>
  )
}

export default ItemCount;
