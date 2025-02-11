import React, { useState } from 'react'

const Form = () => {
  const[name, setName] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    alert(`The name you entered is: ${name}`)
  }
  return (
    <>
        <form action='' method='post' onSubmit={handleSubmit}>
            <label htmlFor='name'>Enter your name:</label>
            <input type='text' id='name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form> 
    </>
  )
}

export default Form
