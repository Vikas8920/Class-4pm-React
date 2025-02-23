import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import ProductList from './Component/ProductList'
import Cart from './Component/Cart'

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) =>{
    setCart([...cart, product])
  }
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<ProductList addToCart={addToCart}/>}/>
          <Route path='/cart' element={(cart.length!==0)?<Cart cart={cart}/>:<div className='display-5 text-center mt-5'>Add items in your Cart</div>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
