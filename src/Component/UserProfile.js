import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const UserProfile = () => {
    const {user, logout} = useContext(AuthContext)

    if(!user){
        return <p>No user is logged in</p>
    }
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default UserProfile
