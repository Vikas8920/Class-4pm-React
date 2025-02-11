import React, { useState } from 'react'

const Select = () => {
    const[myCar, setMyCar] = useState('')
    const handleChange = (e) =>{
        setMyCar(e.target.value)
    }
  return (
    <>
      <form>
        <select value={myCar} onChange={handleChange}>
            <option>Select</option>
            <option value='Ford'>Ford</option>
            <option value='BMW'>BMW</option>
            <option value='Mercedes'>Mercedes</option>
            <option value='Audi'>Audi</option>
        </select>
      </form>
    </>
  )
}

export default Select
