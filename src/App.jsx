import React, { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
    const handle=()=>{
      setCount((prev)=>prev+1);
    }
  return (
    <div>
  <h1>count is:{count}</h1>
  <button onClick={handle}>+</button>
    </div>
  )
}

export default App