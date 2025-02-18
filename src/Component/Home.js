import React from 'react'
import './Home.css'

const Home = () => {
  const myStyle = {
    color:'white',
    backgroundColor:'Blue',
    padding:'10px',
    fontSize: '35px',
    textAlign: 'center'
  }
  return (
    <>
      <h1 style={{backgroundColor: 'red', fontSize:'35px'}}>Home</h1>
      <h2 style={myStyle}>Welcome</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non posuere turpis, ut porttitor lacus. Vestibulum ultricies non mi non scelerisque. Sed gravida tempor orci. Integer ullamcorper facilisis ligula, dignissim feugiat ipsum tristique eu. Nullam fermentum faucibus enim vel commodo. Sed ut mauris nec ligula luctus suscipit quis eget ex. Duis consectetur vel tellus vel cursus.</p>
    </>
  )
}

export default Home
