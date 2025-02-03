import React from 'react'

const HelloWorld = ({name, para}) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{para} to our React Application</p>
    </div>
  )
}

export default HelloWorld
