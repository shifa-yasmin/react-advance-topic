// import React from 'react'

import { useState } from "react";

const App = () => {
  const colors=["red","blue","green","pink","yellow"];
    const [currentPage,setCurrentPage]=useState(1);
    const colorperPage=1;
    const LastIndex=currentPage*colorperPage;
    const  firstIndex=(currentPage-1)*colorperPage;
    const TotelPsage=colors.slice(firstIndex,LastIndex);
    const currentcolor=Math.ceil(colors.length/colorperPage)
  return (
    <div>
      <h1>color change </h1>
      {TotelPsage.map((n)=>(
        <div key={n.id} style={{width:"200px", height:"100px" ,backgroundColor:n}}>
           
      </div>
      ))}
      <div>
        <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>prev</button>
        <span> page {TotelPsage} </span>
        <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===currentcolor}>next</button>
      </div>
    </div>
  )
}

export default App