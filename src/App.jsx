// import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App