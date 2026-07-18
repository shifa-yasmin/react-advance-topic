// import React from 'react'

import { useContext } from "react"
import { myContext } from "./App"

const Context = () => {
    const {toggle,setToggle}=useContext(myContext)
  return (
    <div style={{background:toggle, height:"100vh"}}>
    <button onClick={()=>setToggle(toggle==="pink"?"red":"pink")}>color change</button>
    </div>
  )
}

export default Context