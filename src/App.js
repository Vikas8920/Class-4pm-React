import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import ProductList from './Component/ProductList'
import Cart from './Component/Cart'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
