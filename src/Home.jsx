// import React from 'react'

import React from "react"

const Home = React.memo(() =>{
     console.log("child")
  return (
    <div>
        <h1>child componet</h1>
    </div>
  )
})

export default Home