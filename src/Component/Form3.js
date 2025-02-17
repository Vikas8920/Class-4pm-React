import React from 'react'
import RegistrationForm from './RegistrationForm'
import LoginForm from './loginForm'

const Form3 = ({form}) => {
  if(form==true){
    return (
        <>
          <LoginForm/>
        </>
      )
  }else{
    return(
        <RegistrationForm/>
    )
  }
}

export default Form3
