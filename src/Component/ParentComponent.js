import React, { useState } from 'react'

const ParentComponent = () => {
   const DisplayValue = ({value}) =>{
    console.log('Display value rendered')
    return <div>Value: {value}</div>
   } 

   const MemoizedDisplayValue = React.memo(DisplayValue)

   const [counter, setCounter] = useState(0)
   const [otherValue, setOtherValue] = useState(0)

   const incrementCounter = () =>{
    setCounter(counter + 1)
   }
   const incrementOtherValue = () =>{
    setOtherValue(otherValue + 1)
   }
  return (
    <>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={incrementOtherValue}>Increment Other Value</button>

      <MemoizedDisplayValue value={counter}/>
      <DisplayValue value={otherValue}/>
    </>
  )
}

export default ParentComponent
