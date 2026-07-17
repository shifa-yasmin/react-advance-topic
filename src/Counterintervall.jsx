import  { useEffect, useState } from 'react'

export const Counterintervall = () => {
    const [count,setCount]=useState(0)
    useEffect(()=>{
    setInterval(()=>{
       setCount((prev)=>prev+1)
    },1000)
    },[])
  return (
    <div>
      <h1>count is:{count}</h1>
    </div>
  )
}
