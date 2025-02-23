import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {userId} = useParams()
    const [userDetails, setUserDetails] = useState(null)

    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${userId}`)
        .then((response)=>response.json())
        .then((data)=>setUserDetails(data))
      }, [userId])
  return (
    <>
      <div className='container mt-3'>
        {userDetails? (
            <div className='row mt-3'>
                <h2 className='text-center mb-5'>User Details</h2>
                <div className='col-md-6 border border-1 border-dark rounded-1 d-flex justify-content-center align-items-center p-4'>
                    <img src={userDetails.image} alt='userDetails'/>
                </div>
                <div className='col-md-6 border border-1 border-dark rounded-1 p-4'>
                  <h5 class="card-title">Full Name: {userDetails.firstName + ' ' + userDetails.lastName}</h5>
                  <h5 class="card-title">Email: {userDetails.email}</h5>
                  <h5 class="card-title">Age: {userDetails.age}</h5>
                  <h5 class="card-title">Phone: {userDetails.phone}</h5>
                  <h5 class="card-title">Gender: {userDetails.gender}</h5>
                  <h5 class="card-title">Height: {userDetails.height 
                    + 'cm'}</h5>
                  <h5 class="card-title">Weight: {userDetails.weight + 'Kg'}</h5>
                  <h5 class="card-title">Username: {userDetails.username}</h5>
                </div>
            </div>
        ):<div className='display-4'>Loading User Details...</div>}
      </div>
    </>
  )
}

export default UserDetails
