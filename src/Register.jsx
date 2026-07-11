import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
const Register= () => {
    const navigate=useNavigate()
  const [name,setname]=useState([])
  
  const handle=()=>{
       axios.post("http://localhost:3000/user",{
         name
   }).then((res)=>{
    console.log(res);
    navigate("/login")
   })
  }
  return (
    <div>
      <h1>Register Page</h1>
        <input value={name} placeholder='enter name' onChange={(e)=>setname(e.target.value)}/>
        <br/>
        <button onClick={handle}>submit</button>
    </div>
  )
}

export default Register