import React from 'react'
import Vehicle from './Vehicle'

const Garrage2 = () => {
    const vehicle = ['Ford', 'BMW', 'Audi']
  return (
    <>
      <h1>Who lives in my Garage</h1>
      <ul>
        {vehicle.map((car)=><Vehicle brand={car}/>)}
      </ul>
    </>
  )
}

export default Garrage2
