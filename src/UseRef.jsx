// import  { useRef } from 'react'

// const UseRef = () => {
//     const ref=useRef(0);
//     const handle=()=>{
//        ref.current++
//        console.log(ref.current)
//     }
//   return (
//     <div>
//   <h1>count is:{ref.current}</h1>
//   <button onClick={handle}>+</button>
//     </div>
//   )
// }

// export default UseRef




import { useRef } from 'react'

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