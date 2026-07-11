import  { useReducer } from 'react'

const reducer=(state,action)=>{
  if(action.type==="toggle"){
    return state==="red"?"pink":"red"
  }
}
const App = () => {
    const [state,dispatch]=useReducer(reducer,"red")
  return (
    <div style={{background:state, height:"100vh"}}>
      <button onClick={()=>dispatch({type:"toggle"})}>click</button>
    </div>
  )
}

export default App