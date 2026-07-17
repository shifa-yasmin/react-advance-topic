import { useState } from 'react'
const Fetchpost = () => {
    const [user,setUser]=useState(null)
    const handle=()=>{
        fetch("https://jsonplaceholder.typicode.com/users",{
            method:"post",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name:"shifa",
                place:"koramkode"
            })
        })
        .then((res1)=>res1.json())
        .then((res)=>{
            setUser(res)
            console.log(res)
        })
    }
  return (
    <div>
        <button onClick={handle}>click</button>
        {user&&(
            <div>
                <h1>{user.name}</h1>
                <h1>{user.place}</h1>
            </div>
         )}
    </div>
  )
}
export default Fetchpost