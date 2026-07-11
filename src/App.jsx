import  { createContext, useState } from 'react'
import Home from './Home'
export const myContext=createContext()
const App = () => {
    const [toggle,setToggle]=useState("red")
  return (
    <div>
     <myContext.Provider value={{toggle,setToggle}}>
          <Home/>
     </myContext.Provider>
    </div>
  )
}

export default App