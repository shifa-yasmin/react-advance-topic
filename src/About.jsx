import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const [data,setData]=useState([])
  const {id}=useParams();
  useEffect(()=>{
      axios.get(`http://localhost:3000/students/${id}`)
      .then((res)=>{
        console.log(res.data);
        setData(res.data)
      })
  },[])
  return (
    <div>
     <>
       <p>{data.name}</p>
       <p>{data.course}</p>
     </>
      </div>
  )
}

export default About