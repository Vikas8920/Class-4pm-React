import React, { useState } from 'react'

const KeyPress = () => {
  const[inputValue, setInputValue] = useState('')
  const handleKeyDown = (event) =>{
    if(event.key === 'Enter'){
        document.write('Enter key was pressed!')
    }
  }
  const handleChange = (event) =>{
    setInputValue(event.target.value)
  }
  return (
    <>
      <input type='text' value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}/>
      <p>You typed: {inputValue}</p>
    </>
  )
}

export default KeyPress
