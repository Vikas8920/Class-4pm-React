import React from 'react'
import Vehicle2 from './Vehicle2'

const Garrage3 = () => {
 const cars = [
    {id:1, brand: 'Ford'},
    {id:2, brand: 'BMW'},
    {id:3, brand: 'Audi'}
 ]
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <ul>
        {cars.map((car)=><Vehicle2 key={car.id} brand={car.brand}/>)}
      </ul>
    </>
  )
}

export default Garrage3
