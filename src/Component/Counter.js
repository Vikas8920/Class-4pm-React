import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    useEffect(()=>{
        setCalculation(() => count *2)
    }, [count])
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={()=>setCount((c)=>c+1)}>+</button>
      <br/>
      <p>Calculation: {calculation}</p>
    </>
  )
}

export default Counter
