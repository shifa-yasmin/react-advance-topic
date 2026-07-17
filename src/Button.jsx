import  { useContext } from 'react'
import { myContext } from './App'

const Button = () => {
    const {count,setCount}=useContext(myContext)
  return (
    <div>
        <h1>count is :{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}

export default Button