import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Blogs from './Component/Blogs'
import Contact from './Component/Contact'
import NoPage from './Component/NoPage'

import './App.css'
import ParentComponent from './Component/ParentComponent'
import FavouriteColor from './Component/FavouriteColor'
import Car from './Component/Car'

const App = () => {
  return (
    <>
    <ParentComponent/>
    <FavouriteColor/>
    <Car/>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
