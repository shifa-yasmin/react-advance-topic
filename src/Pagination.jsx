import  { useEffect, useState } from 'react'
import axios from "axios"
const Pagination = () => {
    const [currentpage,setCurrentpage]=useState(1);
    const stdperpage=5;
    const [data,setData]=useState([])
    useEffect(()=>{
    axios.get("http://localhost:3000/students")
    .then((res)=>{
        setData(res.data)
        console.log(res.data)
    })
    },[])
    const lastIndex=currentpage*stdperpage;
    const firstIndex=lastIndex-stdperpage;
    const totelstd=data.slice(firstIndex,lastIndex);
    const totelPage=Math.ceil(data.length/stdperpage);
  return (
    <div>
        <table className=' border border-black'>
            <thead>
             <tr>
                <th className='p-5 border border-black'>name</th>
                <th className='p-5 border border-black'>course</th>
                <th className='p-5 border border-black'>department</th>
             </tr>
            </thead>
            <tbody>
                {totelstd.map((n)=>(
                    <tr>
                       <td className='p-5 border border-black'>{n.name}</td>
                        <td className='p-5 border border-black'>{n.course}</td>
                         <td className='p-5 border border-black'>{n.department}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button onClick={()=>setCurrentpage(currentpage-1)} disabled={currentpage===1}>prev</button>
        <span>{currentpage} to {totelPage} </span>
        <button onClick={()=>setCurrentpage(currentpage+1)} disabled={currentpage===totelPage}>next</button>
    </div>
  )
}

export default Pagination