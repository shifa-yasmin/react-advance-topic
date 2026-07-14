import React, { useState } from 'react'

const App = () => {
  const [color,setColor]=useState("red");
  const handle=()=>{
    setColor((prev)=>prev==="red"?"pink":"red")
  }
  return (
    <div>
     <div style={{background:color ,height:"100vh"}}>
    <button onClick={handle}>click</button>
    </div>
    </div>
    
  )
}

export default App