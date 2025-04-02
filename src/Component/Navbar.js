import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav style={{background:'black', padding:'10px'}}>
        <ul style={{display:'flex', listStyle:'none', margin:0, padding:0}}>
            <li style={{marginRight:'15px'}}>
                <Link  style={{color:'white', textDecoration:'none'}} to='/'>Home</Link>
            </li>
            <li>
                <Link  style={{color:'white', textDecoration:'none'}} to='/cart'>Cart</Link>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
