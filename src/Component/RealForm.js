import React, { useState } from 'react'

const RealForm = ({onFormSubmit}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()

        onFormSubmit({name,email,phone})
        setName('')
        setEmail('')
        setPhone('')
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} required id='name'/>
         </div>
         <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required id='email'/>
         </div>
         <div>
            <label htmlFor='phone'>Phone:</label>
            <input type='tel' value={phone} onChange={(e)=>setPhone(e.target.value)} required id='phone'/>
         </div>
         <div>
            <button type='submit'>Submit</button>
         </div>
      </form>
    </>
  )
}

export default RealForm
