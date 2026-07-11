import  { useContext } from 'react'
import { myContext } from './App'

const Home = () => {
    const user=useContext(myContext)
  return (
    <div>
    <h1>hello{user}</h1>
    </div>
  )
}

export default Home