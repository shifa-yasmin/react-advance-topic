import  { useContext } from 'react'
import { myContext } from './App'

const Home = () => {
    const name=useContext(myContext)
  return (
    <div>
    <h1>name is:{name}</h1>
    </div>
  )
}

export default Home