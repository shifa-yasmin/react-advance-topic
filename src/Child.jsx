import React, { useEffect, useState } from 'react'

const Child = () => {
    const [count,setCount] =useState(0);
   useEffect(()=>{
    const timer=setInterval(()=>{
         setCount((prev)=>prev+1)
    },1000)
    return ()=>clearInterval(timer)
   })
  return (
    <div>
        <h1>count is :{count}</h1>
    </div>
  )
}

export default Child