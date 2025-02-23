import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
      <>
          <div class="card" style={{width: '25rem'}}>
              <img src={user.image} class="card-img-top" alt="users" width={'200px'} height={'250px'}/>
              <div class="card-body">
                  <h5 class="card-title">Full Name: {user.firstName + ' ' + user.lastName}</h5>
                  <h5 class="card-title">Email: {user.email}</h5>
                  <h5 class="card-title">Age: {user.age}</h5>
                  <h5 class="card-title">Phone: {user.phone}</h5>
                  <h5 class="card-title">Gender: {user.gender}</h5>
                  <Link to={`/users/${user.id}`} className='btn btn-primary mt-2'>Show Details</Link>
              </div>
          </div>
      </>
  )
}

export default UserCard
