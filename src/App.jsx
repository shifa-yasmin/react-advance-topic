
// import Colorchange from './Colorchange'
// import { Counterintervall } from "./Counterintervall"
// import Button from "./Button"
// import Fetchpost from "./Fetchpost"
// import UseRef from "./UseRef"
// import Pagination from "./Pagination"
// import TudoTrash from "./TudoTrash"
// import Fetchpost from "./Fetchpost"
// import Fetchget from "./Fetchget"

import { createContext, useState } from "react"
import Context from "./Context";
export const myContext=createContext();
const App = () => {
         const [toggle,setToggle]=useState("pink")
  return (
    <div>
      <myContext.Provider value={{toggle,setToggle}}>
           <Context/>
      </myContext.Provider>
      {/* <UseRef/> */}
      {/* <Colorchange/> */}
      {/* <Counterintervall/> */}
      {/* <Button/> */}
      {/* <Fetchpost/> */}
      {/* <TudoTrash/> */}
      {/* <Pagination/> */}
      {/* <Fetchpost/> */}
      {/* <Fetchget/> */}
    </div>
  )
}

export default App