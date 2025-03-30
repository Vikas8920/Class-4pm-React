import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import Navbar from './Component/Navbar'
import ProductList from './Component/ProductList'
import Cart from './Component/Cart'

const App = () => {
  return (
    <>
      <Router>
        <CartProvider>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ProductList/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </CartProvider>
      </Router>
    </>
  )
}

export default App
