// import React from 'react'
import useCounter from './useCounter'

const Button = () => {
   const {count,increment,decrement}=useCounter()
  return (
    <div>
   <h1>count is :{count}</h1>
   <button onClick={()=>increment()}>+</button>
   <button onClick={()=>decrement()}>-</button>
    </div>
  )
}

export default Button