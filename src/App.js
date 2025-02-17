import React, { use, useState } from 'react'
import Form3 from './Component/Form3'
// import Form from './Component/Form'
// import Form2 from './Component/Form2'
// import Select from './Component/Select'
// import RadioButtons from './Component/RadioButtons'
// import Checkboxes from './Component/Checkboxes'
// import RealForm from './Component/RealForm'
// import Display from './Component/Display'

const App = () => {
  // const [formData, setFormData] = useState(null)
  // const handleFormSubmit = (data) =>{
  //   setFormData(data)
  // }

  const [form, setForm] = useState(true)
  const [msg, setMsg] = useState('')

  const handleForm = () =>{
    if(form===false){
      setForm(true)
      setMsg('Login form shows successfully')
    }
  }
  const handleForm1 = () =>{
    if(form===true){
      setForm(false)
      setMsg('Registration form shows successfully')
    }
  }
  return (
    <>
    {/* <Form/>
    <hr/>
    <Form2/>
    <hr/>
    <Select/>
    <hr/>
    <RadioButtons/>
    <hr/>
    <Checkboxes/>
    <hr/> */}

    {/* <RealForm onFormSubmit={handleFormSubmit}/>
    {formData && <Display data={formData}/>} */}
    {/* if formData exist, render the display component */}

    <div className='container d-flex justify-content-evenly'>
      <div className='mt-5'>
        <button onClick={handleForm} className='btn btn-success mx-4 px-4'>Click for Login Form</button>
        <button onClick={handleForm1} className='btn btn-primary'>Click for Registration Form</button>
        <h4 className='mt-5 pt-5 ms-4 text-primary'>{msg}</h4>
      </div>
      <div>
        <Form3 form={form}/>
      </div>
    </div>
 
    </>
  )
}

export default App

