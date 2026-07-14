import  { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {

  const [currentpage,setCurrentpage]=useState(1);
  const productperpage=3;
  const [data,setData]=useState([]);
  useEffect(()=>{
      axios.get("http://localhost:3000/students")
      .then((res)=>{
        console.log(res.data);
        setData(res.data)
      })
  },[])
  const lastIndex=currentpage*productperpage;
  const firstIndex=lastIndex-productperpage;
  const currentproducts=data.slice(firstIndex,lastIndex);
  const totelpage=Math.ceil(data.length/productperpage)
  return (
    <div className='flex items-center justify-center '>
      <table className='border border-black'>
        <thead >
           <tr>
          <th className=' border border-black'>name</th>
          <th className=' border border-black'>email</th>
         </tr>
        </thead>
        <tbody>
          {currentproducts.map((n)=>(
            <tr >
              <td className=' border border-black'>{n.name}</td>
              <td className=' border border-black'>{n.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
        
         <div>
         <button disabled={currentpage===1} onClick={()=>setCurrentpage(currentpage-1)} >prev</button>
         <span>page {currentpage} to {totelpage}</span>
         <button disabled={currentpage===totelpage} onClick={()=>setCurrentpage(currentpage+1)}>next</button>
         </div>
    </div>
   
  )
}

export default App