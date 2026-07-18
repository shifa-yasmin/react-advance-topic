
// import Colorchange from './Colorchange'
// import { Counterintervall } from "./Counterintervall"
// import Button from "./Button"
// import Fetchpost from "./Fetchpost"
// import UseRef from "./UseRef"
// import Pagination from "./Pagination"
// import TudoTrash from "./TudoTrash"
// import Fetchpost from "./Fetchpost"
// import Fetchget from "./Fetchget"

import useCounter from "./useCounter"


const App = () => {
     const {count,inc,dec}=useCounter()    
  return (
    <div>
        <h1>count is:{count}</h1>
        <button onClick={()=>inc()}>+</button>
        <button onClick={()=>dec()}>-</button>
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