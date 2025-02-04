import React from 'react'

const Car = (props) => {
  return (
    <>
      <h2>I am a {props.brand.name} of the model {props.brand.model}</h2>
    </>
  )
}

export default Car
