import  { useEffect, useState } from 'react'
// import axios from "axios"
const App = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
     fetch("http://localhost:3000/students")
     .then((res1)=>res1.json())
     .then((res)=>{
      setData(res);
      console.log(res)
     })
  },[])
  return (
    <div>
        {data.map((n)=>(
          <p>{n.name}</p>
        ))}
    </div>
  )
}

export default App