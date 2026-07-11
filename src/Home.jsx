import  {  useEffect, useState } from 'react'
import axios from "axios"
import { Link} from 'react-router-dom'
const Home = () => {
    
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/students")
        .then((res)=>{
            setData(res.data);
            console.log(res.data);
         
        })
    },[])
  return (
   <ul>
     <div>
     {data.map((n)=>(
    <li key={n.id}>
    <Link to={`/about/${n.id}`}>{n.name}</Link>  
      </li>
     ))}
    </div>
   </ul>
  )
}

export default Home