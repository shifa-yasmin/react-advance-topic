// import React from 'react'

import { useEffect, useState } from "react"
import axios from "axios"
const Home = () => {
    const [currentPage,setCurrentPage]=useState(1);
    const productPerPage=3
    const [data,setData]=useState([]);
    useEffect(()=>{
   axios.get("http://localhost:3000/user")
   .then((res)=>{
    console.log(res.data)
    setData(res.data)
   })
    },[])
   const lastIndex=currentPage*productPerPage;
   const firstIndex=lastIndex-productPerPage;
   const currentProducts=data.slice(firstIndex,lastIndex);
   const totelpages=Math.ceil(data.length/productPerPage)
 
  return (
    <div className="flex items-center justify-center">
        <table className="border border-black">
                <thead className="border border-black">
                 <tr>
                    <th>name</th>
                 </tr>
                </thead>
                <tbody >
                     {currentProducts.map((n)=>(
                 <tr>
                    <td className="border border-black">{n.name}</td>
                 </tr>
                     ))}     
                </tbody>
        </table>
        <div>
            <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>prev</button>
            <span>
                page {currentPage}to {totelpages}
            </span>
            <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totelpages}>next</button>
        </div>
    </div>
  )
}

export default Home