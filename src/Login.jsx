import { useEffect, useState } from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom"
const Login = () => {
       const navigate=useNavigate()
       const [user,setUser]=useState([])
        const [name,setname]=useState("");
  useEffect(()=>{
          axios.get("http://localhost:3000/user")
          .then((res)=>{
            console.log(res.data);
            setUser(res.data)
          })
  },[]);
  const handlelogin=()=>{
       let user1=user.find((n)=>n.name===name);
       if(user1){
        navigate("/home")
       }else{
        alert("invalide")
       }
  }
  return (
    <div>
        <h1>login page</h1>
    <input value={name} placeholder='enter name' onChange={(e)=>setname(e.target.value)}/>
        <br/>
        <button onClick={handlelogin}>submit</button>
    </div>
  )
}

export default Login