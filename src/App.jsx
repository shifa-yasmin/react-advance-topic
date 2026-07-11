import React, { useReducer } from 'react'
  const reducer=(state,action)=>{
    if(action.type==="inc"){
      return state+1
    }
    if(action.type==="dec"){
      return state-1
    }
  }
const App = () => {
  const [state,dispatch]=useReducer(reducer,0)
  return (
    <div>
      <h1>count is:{state}</h1>
      <button onClick={()=>dispatch({type:"inc"})}>+</button>
      <button onClick={()=>dispatch({type:"dec"})}>-</button>
    </div>
  )
}

export default App