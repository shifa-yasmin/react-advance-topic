import {  useState } from 'react'

const App = () => {
  const [data,setData]=useState([]);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("")
  const handle=()=>{
    fetch("http://localhost:3000/students",{
        method:"post",
        headers:{
          "Content-type":"Application/json",
        },
        body:JSON.stringify({
          name,
          email
        })
       })
       .then((res)=>res.json())
        .then((data)=>{
          setData(data)
          console.log(data)
        })
  }
  return (
    <div>
      <h1>form </h1>
      <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
      <br/>
       <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'/>
      <br/>
      <button onClick={handle}>submit</button>

    </div>
  )
}

export default App