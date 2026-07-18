import React, { useRef } from 'react'

const UseRef = () => {
    const ref=useRef();
   const handle=()=>{
    ref.current.focus();
   }
  return (
    <div>
   <input ref={ref} />
   <button onClick={handle}>focus</button>
    </div>
  )
}

export default UseRef