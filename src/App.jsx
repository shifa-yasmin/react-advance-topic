import  { createContext } from 'react'
import Home from './Home'
export const myContext=createContext("gress")
const App = () => {
  return (
    <div>
     <Home/>
    </div>
  )
}

export default App