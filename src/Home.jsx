import { useContext } from 'react'
import { myContext } from './App'

const Home = () => {
    const {toggle,setToggle}=useContext(myContext);
    const handle=()=>{
        setToggle(toggle==="red"?"pink":"red")
    }
  return (
    <div style={{background:toggle}}>
        <button onClick={handle}>click</button>
    </div>
  )
}

export default Home