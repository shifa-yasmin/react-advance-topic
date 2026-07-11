import  { createContext, useState } from 'react'
import Home from './Home';
 export const myContext=createContext();
const App = () => {
 
  const [name,setname]=useState("shifa")
  return (
    <div>
    <myContext.Provider value={name}>
      <Home/>
    </myContext.Provider>
    </div>
  )
}

export default App