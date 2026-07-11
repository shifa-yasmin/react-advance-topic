import  { useContext } from 'react'
import { myContext } from './App'

const Home = () => {
    const {name,setName}=useContext(myContext)
  return (
    <div>
      <h1>hello{name}</h1>
      <button onClick={()=>setName("shifa")}>click</button>
      <button onClick={()=>setName("shahma")}>logout</button>
    </div>
  )
}

export default Home