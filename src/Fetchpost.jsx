import { useEffect, useState } from 'react'

const Fetchpost = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("")
    const [data,setData]=useState([])
    useEffect(()=>{
    fetch("http://localhost:3000/users")
    .then((res)=>res.json())
    .then((data)=>setData(data))
    },[])
   const handle=()=>{
     fetch("http://localhost:3000/users",{
        method:"post",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name,email
        })
     })
     .then((res)=>res.json())
        .then((data)=>{
            setData((prev)=>[...prev,data]);
            console.log(data)
        })
   }
  return (
    <div>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
        <br/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'/>
        <br/>
        <button onClick={handle}>click</button>
        <ul>
    {data.map((n)=>(
           
           <div key={n.id}>
             <p>{n.name}</p>
             <p>{n.email}</p>
           </div>
          
        ))}
        </ul>
        
    </div>
  )
}

export default Fetchpost