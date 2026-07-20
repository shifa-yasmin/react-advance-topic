import { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
const Name = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/students")
        .then((res)=>{
            console.log(res.data);
            setData(res.data)
        })
    },[])
  return (
    <div>
        <ul>
    {data.map((n)=>(
   <li>
     <Link to={`/about/${n.id}`}>
   {n.name}
    </Link>
   </li>
    ))}
        </ul>
    </div>
  )
}

export default Name