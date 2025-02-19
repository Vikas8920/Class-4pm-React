import React, { useEffect, useState } from 'react'

const DisplayData = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then((response)=>response.json())
        .then((data)=> setUsers(data.users))
    }, [])
  return (
    <>
      
    </>
  )
}

export default DisplayData
