import React from 'react'

const Child1 = ({name}) => {  
    console.log("child renderd")
  return (
    <div>
   <h1>{name}</h1>
    </div>
  )
}

export default React.memo(Child1)