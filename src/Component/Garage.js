import React from 'react'
import Car from './Car'

const Garage = () => {
    const CarInfo = {name:'Ford', model:'Mustang'}
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={CarInfo}/>
    </>
  )
}

export default Garage
