import  { useState } from 'react'

const useCounter = () => {
  const [count,setCount]=useState(0);
  const inc=()=>{
    setCount(count+1)
  }
  const dec=()=>{
    setCount(count-1)
  }
  return {count,inc,dec}
}

export default useCounter