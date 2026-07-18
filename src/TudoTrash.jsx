import { useState } from 'react'

const TudoTrash = () => {
    const [text,setText]=useState("");
    const [todos,setTodos]=useState([]);
    const [trash,setTrash]=useState([]);
    const todoAdd=()=>{
        const newTodo={
            id:Date.now(),
            task:text,
        }
        console.log(newTodo)
        setTodos([...todos,newTodo])
        setText("")
    }
    const todoDelete=(id)=>{
        const deleted=todos.find((todo)=>todo.id===id)
        setTrash([...trash,deleted]);
        setTodos(todos.filter((todo)=>todo.id!==id))
    }

 const todoUndo=(id)=>{
    const Undo=trash.find((todo)=>todo.id===id);
    setTodos([...todos,Undo])
    setTrash(trash.filter((todo)=>todo.id!==id))
 }
  return (
    <div className='flex items-center justify-center flex-col'>
     <h1>Todo App</h1>
     <br/>
    <div className='flex flex-row gap-5'>
         <input  value={text} onChange={(e)=>setText(e.target.value)} placeholder='enter value' className='border border-e-black'/>
         <button onClick={todoAdd} className='border border-black bg-green-300'>Add</button>
         <br/>
    </div>
     <div className='flex flex-row gap-6'>
        <div className='flex flex-col bg-pink-100 mb-2 gap-2 w-56 min-h-[100px] w-[200px] border border-black'>
           {todos.map((n)=>(
            <div key={n.id} className='bg-gray-100 flex flex-row p-2 gap-20 '>
                <h1>{n.task}</h1>
                <button onClick={()=>todoDelete(n.id)} className='bg-red-300'>delete</button>
                </div>
           ))} 
         </div>
          <div className='flex flex-col bg-pink-100 mb-2 gap-2 w-56 min-h-[100px] w-[200px] border border-black'>
           {trash.map((n)=>(
            <div key={n.id} className='bg-gray-100 flex flex-row p-2 gap-20 '>
                <h1>{n.task}</h1>
                <button onClick={()=>todoUndo(n.id)} className='bg-red-300'>Undo</button>
                </div>
           ))} 
         </div>
     </div>
    </div>
  )
}
export default TudoTrash