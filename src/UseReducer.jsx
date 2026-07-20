import  { useReducer } from 'react'

const reducer=(state,action)=>{
     if(action.type==="inc")
        return state+1
     return state;
}
const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,0)
  return (
    <div>
        <h1>count is :{state}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>+</button>
    </div>
  )
}

export default UseReducer