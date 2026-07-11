import { createContext,  useState } from 'react'
import Home from './Home';
export const myContext=createContext();
const App = () => {
  const [name,setName]=useState("safa")
  return (
    <div>
        <myContext.Provider value={{name,setName}}>
          <Home/>
          </myContext.Provider>  
    </div>
  )
}

export default App