import { useState } from 'react'

const useCounter = () => {
  const [count,setcount]=useState(0);
  const increment=()=>{
    setcount(count+1)
  }
  return {increment,count}
}

export default useCounter