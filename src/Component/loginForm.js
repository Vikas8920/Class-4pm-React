import React from 'react'

const loginForm = () => {
  return (
    <>
      <div className='container mt-5 d-flex justify-content-center'>
        <form className='border border-1 border-dark rounded-1 p-4'>
            <h2 className='text-center'>Login Form</h2>
            <div className='container mt-4 d-flex justify-content-center'>
                <label htmlFor='username' className='me-5'>Username:</label>
                <input type='text' id='username' placeholder='Enter Username' className='ps-2'/>
            </div>
            <div className='container mt-4 d-flex justify-content-center'>
                <label htmlFor='password' className='me-5'>Password:</label>
                <input type='passwword' id='password' placeholder='Enter Password' className='ps-2'/>
            </div>
            <div className='container mt-4'>
                <button type='button' className='btn btn-primary px-4'>Login</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default loginForm