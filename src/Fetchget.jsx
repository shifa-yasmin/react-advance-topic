import  { useEffect, useState } from 'react'

const Fetchget = () => {
     const [user,setUser]=useState([])
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
     setUser(data)
    })
    },[])
  return (
    <div>
        {user.map((n)=>(
            <p>{n.title}</p>
        ))}
    </div>
  )
}

export default Fetchget