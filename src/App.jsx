

// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Counterslice';

const App = () => {
  const count=useSelector((state)=>state.counter.count)
   const dispatch=useDispatch();
  return (
    <div>
    <h1>count:{count}</h1>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default App