import {  useState } from 'react'
import axios from "axios"
const App = () => {
  const [data,setData]=useState([]);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("")
 const handle=()=>{
  axios.post("http://localhost:3000/students",{
    name,email
  }).then((res)=>{
    setData(res.data)
    console.log(res.data)
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