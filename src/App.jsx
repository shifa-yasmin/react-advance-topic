// import React from 'react'

import { useState } from "react";

const App = () => {
  const colors=["red","blue","green","pink","yellow"];
    const [currentPage,setCurrentPage]=useState(1);
    const colorperPage=1;
    const LastIndex=currentPage*colorperPage;
    const  firstIndex=currentPage-colorperPage;
    const TotelPsage=colors.slice(firstIndex,LastIndex);
    const currentcolor=Math.ceil(colors.length/colorperPage)
  return (
    <div>
      <h1>color change </h1>
      {colors.map((n)=>(
        <div style={{width:"200px", height:"100px" ,background:colors}}>
            {n.currentcolor}
      </div>
      ))}
      <div>
        <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>prev</button>
        <span>{currentPage} page {TotelPsage}</span>
        <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===TotelPsage}>next</button>
      </div>
    </div>
  )
}

export default App