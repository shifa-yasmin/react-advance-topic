import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
const About = () => {
    const {id}=useParams();
    const [data,setData]=useState({});
    useEffect(()=>{
     axios.get(`http://localhost:3000/students/${id}`)
     .then((res)=>{
        setData(res.data);
        console.log(res.data)
     })
    },[])
  return (
    <div>
       <h1>{data.name}</h1>   
       <h1>{data.age}</h1> 
       <h1>{data.course}</h1>
    </div>
  )
}

export default About