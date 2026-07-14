import  { useState } from 'react'

const App = () => {
  const [value,setValue]=useState(false);
  const handle=()=>{
    setValue((prev)=>!prev)
  }
  return (
    <div>
      <h1>{value?"open":"close"}</h1>
      <button onClick={handle}>click</button>
    </div>
  )
}

export default App