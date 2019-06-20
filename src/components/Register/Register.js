import React, { useState } from 'react'
import './Register.css'

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConf: ""
  })

  const handleChange = e => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <div className="Register">
      <form className="Register-form" onSubmit={handleSubmit}>
        <label name="email">
          Email
          <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
        </label>

        <label name="displayName">
          Display name
          <input type="text" name="displayName" value={inputs.displayName} onChange={handleChange} required />
        </label>

        <label name="firstName">
          First name
         <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} required />          
        </label>
         
        <label name="lastName">
          Last name
          <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} required /> 
        </label>

        <label name="password">
          Password (6 characters minimum) 
          <input type="password" name="password" value={inputs.password} onChange={handleChange} required />  
        </label>

        <label name="passwordConf">
          Password confirmation
          <input type="password" name="passwordConf" value={inputs.passwordConf} onChange={handleChange} required />  
        </label>
        <button>Sign Up</button>                                
      </form>
    </div>
  )
}

export default Register
