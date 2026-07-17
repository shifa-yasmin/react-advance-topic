
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
      {TotelPsage.map((n)=>(
        <div key={n.id} style={{width:"200px", height:"100px" ,backgroundColor:n}}>
      </div>
      ))}
      <div className="flex flex-row gap-4">
        <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>prev</button>
      <button onClick={()=>setCurrentPage(1)} className="border border-black">red</button>
      <button onClick={()=>setCurrentPage(2)}  className="border border-black">blue</button>
      <button onClick={()=>setCurrentPage(3)}  className="border border-black">green</button>
      <button onClick={()=>setCurrentPage(4)}  className="border border-black">pink</button>
      <button onClick={()=>setCurrentPage(5)}  className="border border-black">yellow</button>
        <span> page {TotelPsage} </span>
        <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===currentcolor}>next</button>
      </div>
    </div>
  )
}

export default App