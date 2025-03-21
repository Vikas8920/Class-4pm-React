import React, { useReducer } from 'react'

const initialState = {count: 0}

function Reducer(state, action){
    switch(action.type){
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        case "reset":
            return initialState
        default:
            throw new Error('Unknown action type')
    }
}

const Counter = () => {
    const [state, dispatch] =  useReducer(Reducer, initialState)
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={()=>dispatch({type: "increment"})}>Increment</button>
      <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type: "reset"})}>Reset</button>
    </>
  )
}

export default Counter
