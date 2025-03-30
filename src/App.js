import React, { useEffect, useRef, useState } from 'react'
import Counter from './Component/Counter'
import AuthProvider from './Component/AuthProvider'
import Login from './Component/Login'
import UserProfile from './Component/UserProfile'
import ThemeProvider from './Component/ThemeProvider'
import ThemeToggle from './Component/ThemeToggle'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  // const count = useRef(0)
  const previousInputValue = useRef('')

  useEffect(()=>{
    previousInputValue.current = inputValue
  }, [inputValue])
  return (
    <>
      <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <h1>Current value : {inputValue}</h1>
      <h1>Previous value: {previousInputValue.current}</h1>

      <hr/>
      <Counter/>

      <hr/>

      <AuthProvider>
        <h1>Simple Authentication System</h1>
        <Login/>
        <UserProfile/>
      </AuthProvider>

      <hr/>

      <ThemeProvider>
        <h1>Toggle Theme</h1>
        <ThemeToggle/>
      </ThemeProvider>
    </>
  )
}

export default App
