// import React from "react";
// import "./style.css";
import {useState} from "react"
export default function App() {
  const ar=[5,2,3,4,5,6];
  const [currentPage,setCurrentPage]=useState(1)
  const arrperPage=1;
  const lastIndex= currentPage*arrperPage;
  const firstIndex=lastIndex-arrperPage;
  const totelPage=ar.slice(firstIndex,lastIndex)
  const currentNumber=Math.ceil(ar.length/arrperPage);
  return (
    <div>
      <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>prev</button>
     {totelPage.map((n)=>(
        <div>
          <button>{n}</button>
        </div> 
     ))}
      <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===currentNumber}>next</button>
      {/* <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>prev</button> */}
      {/* <span>{currentPage} </span> */}
      {/* <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===currentNumber}>next</button> */}
    </div>
  );
}