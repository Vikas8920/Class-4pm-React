import React, { useState } from 'react'

const RadioButtons = () => {
    const[selectedOption, setSelectedOption] = useState('Option1')   // default value
    const handleChange = (e)=>{
        setSelectedOption(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        document.write('Selected radio button: ', selectedOption)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='1'>Option1</label>
        <input type='radio' value='Option1' checked={selectedOption==='Option1'} onChange={handleChange} id='1'/>
        <br/>
        <label htmlFor='2'>Option2</label>
        <input type='radio' value='Option2' checked={selectedOption==='Option2'} onChange={handleChange} id='2'/>
        <br/>
        <label htmlFor='3'>Option3</label>
        <input type='radio' value='Option3' checked={selectedOption==='Option3'} onChange={handleChange} id='3'/>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default RadioButtons
