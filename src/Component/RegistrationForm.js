import React from 'react'

const RegistrationForm = () => {
  return (
    <>
       <div className='container mt-5 d-flex justify-content-center'>
        <form className='border border-1 border-dark rounded-1 p-4'>
            <h2 className='text-center'>Registration Form</h2>
            <div className='container mt-4 d-flex justify-content-center'>
                <label htmlFor='username' className='me-5'>Username:</label>
                <input type='text' id='username' placeholder='Enter Username' className='ps-2'/>
            </div>
            <div className='container mt-4 d-flex justify-content-center'>
                <label htmlFor='email' className='me-5 ps-2'>Email:</label>
                <input type='email' id='email' placeholder='Enter email' className='ms-4 ps-2'/>
            </div>
            <div className='container mt-4 d-flex justify-content-center'>
                <label htmlFor='password' className='me-5'>Password:</label>
                <input type='passwword' id='password' placeholder='Enter Password' className='ps-2'/>
            </div>
            <div className='container mt-4 d-flex justify-content-center'>
                <label htmlFor='cpassword' className='me-5'>Confirm <br/> Password:</label>
                <input type='passwword' id='cpassword' placeholder='Enter Confirm Password' className='ps-2'/>
            </div>
            <div className='container mt-4'>
                <button type='button' className='btn btn-primary px-4'>Register</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default RegistrationForm
