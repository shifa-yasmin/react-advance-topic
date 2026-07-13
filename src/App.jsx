import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0);
  const display=()=>{
     console.log("hello")   
  }
  return (
    <div>
      <h1>count :{count}</h1>
      <button onClick={()=>setCount(count+1)}>increments</button>
      <br/>
      <button onClick={display}>display</button>
    </div>
  )
}

export default App


