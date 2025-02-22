import React from 'react'
// import Timer from './Component/Timer'
// import Counter from './Component/Counter'
// import DisplayData from './Component/DisplayData'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UserDetail from './Component/UserDetail'

const App = () => {
  return (
    <>
      {/* <Timer/> */}
      {/* <Counter/> */}
      {/* <DisplayData/> */}

      <BrowserRouter>
        <h1>Welcome to the user Informtion App</h1>
        <ul>
          <li><Link to='/user/1'>User1</Link></li>
          <li><Link to='/user/2'>User2</Link></li>
          <li><Link to='/user/3'>User3</Link></li>
        </ul>

        <Routes>
          <Route path='/user/:userId' element={<UserDetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
