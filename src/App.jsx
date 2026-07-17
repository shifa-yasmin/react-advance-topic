import React, { useState } from 'react'

const App = () => {
  const [todos,setTodos]=useState([]);
  const [text,setText]=useState("");
  const [trash,setTrash]=useState([]);

  const addTodo=()=>{
      const newTodo={
        id:Date.now(),
        task:text
      }
       console.log(newTodo)
      setTodos([...todos,newTodo]);
      setText("")
  }
  const deletTodo=(id)=>{
    const deleted=todos.find((todo)=>todo.id===id);
    setTrash([...trash,deleted]);
    console.log(deleted)
    setTodos(todos.filter((todo)=>todo.id!==id))
  }
  const undoTodo=(id)=>{
    const undo=trash.find((todo)=>todo.id===id);
    setTodos([...todos,undo]);
    setTrash(trash.filter((todo)=>todo.id!==id))
  }
 
  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
      <h1>Todo App</h1><br/>
       <div className='flex flex-row gap-6'>
         <input className='border border-black text-center' value={text} onChange={(e)=>setText(e.target.value)} placeholder='enter text'/>
        <button className='p-4 bg-green-400' onClick={addTodo}>Add</button>
        
       </div>

  <div className='flex flex-row gap-10'>
         <div className="border border-black bg-pink-100 p-4 w-56 min-h-[100px] min-w-[200px]">
      {todos.map((todo) => (
    <div key={todo.id} className="flex justify-between mb-2 bg-gray-100">
      <h1>{todo.task}</h1>
      <button onClick={()=>deletTodo(todo.id)} className='bg-red-400'>Delete</button>
    </div>
  ))}
</div>

<div className='border border-black bg-pink-100  p-4 w-56 min-h-[100px] min-w-[200px]'>
           {trash.map((n)=>(
            <div key={n.id} className='bg-gray-100 flex justify-between mb-2'>
              <h1>{n.task}</h1>
              <button className='bg-amber-200' onClick={()=>undoTodo(n.id)}>undo</button>
              </div>
           ))}
</div>
  </div>
    </div>
  )
}

export default App