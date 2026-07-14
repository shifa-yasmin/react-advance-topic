import React from 'react'

const Button = ({text,color}) => {

  return (
    <button style={{background:color,padding:"10px"}}>
        {text}
    </button>
  )
}

export default Button