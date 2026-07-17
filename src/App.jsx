import React, { useState } from 'react'

const App = () => {
  const [input,setInput]=useState("");
  const [show,setShow]=useState("");
  const [isEditing,setIsEditing]=useState(false)
  const handleAdd=()=>{
    setShow(input);
  }
  const handleDelete=()=>{
    setShow("");
    setInput("")
  }
  const handleEdit=()=>{
      setIsEditing(true);
      setInput(show);
  }
  const handleUpdate=()=>{
    setIsEditing(false);
    setInput("");
    setShow(input)
  }
  return (
    <div>
      <input onChange={(e)=>setInput(e.target.value)} value={input}/>
         {isEditing?(
          <button onClick={handleAdd}>Add</button>
         ):(
          <button onClick={handleUpdate}>Update</button>
         )}
       
          {show&&(
           <div className='w-full h-100 bg-pink-100'>
            <p>{show}</p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
          )}
         
    </div>
  )
}

export default App