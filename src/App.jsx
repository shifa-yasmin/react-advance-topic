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
      <div style={{width:"200px", height:"100px" ,background:colors}}>
         
      </div>
      <div>
        <button onClick={}>prev</button>
      </div>
    </div>
  )
}

export default App