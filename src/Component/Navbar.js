import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav style={{backgroundColor:'black', padding:'10px'}}>
        <ul style={{display:'flex', listStyle:'none', margin:0, padding:0}}>
            <li style={{marginRight:'15px'}}>
                <Link to='/' style={{color:'white', textDecoration:'none'}}>Home</Link>
            </li>
            <li style={{marginRight:'15px'}}>
                <Link to='/cart' style={{color:'white', textDecoration:'none'}}>Cart</Link>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
