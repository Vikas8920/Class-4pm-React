import React, { useState } from 'react'

const FavouriteColor = () => {
  const [color, setColor] = useState('Red')
  return (
    <>
      <h1>My Favourite Color is {color}</h1>
      <button type='button' onClick={()=>setColor('Blue')}>Blue</button>
    </>
  )
}

export default FavouriteColor
