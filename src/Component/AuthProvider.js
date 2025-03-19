import React, { useState } from 'react'
import { AuthContext } from '../Context/AuthContext'

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (username) =>{
        setUser({name: username})
    }
    const logout = () =>{
        setUser(null)
    }
  return (
    <>
      <AuthContext.Provider value={{user, login, logout}}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
