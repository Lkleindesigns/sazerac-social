import React, { useState } from 'react'
import './Register.css'

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    display_name: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: ""
  })

  const handleChange = e => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(JSON.stringify({user: inputs}))
    fetch("https://morning-fortress-91258.herokuapp.com/api/v1/users", {
      method: "POST",
      body: JSON.stringify({user: inputs}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response =>
        console.log("Success:", response)
      )
      .catch(error => console.error("Error:", error));
  }

  return (
    <div className="Register">
      <form className="Register-form" onSubmit={handleSubmit}>
        <label name="email">
          Email
          <input type="email" name="email" value={inputs.email} onChange={handleChange} required />
        </label>

        <label name="display_name">
          Display name
          <input type="text" name="display_name" value={inputs.display_name} onChange={handleChange} required />
        </label>

        <label name="first_name">
          First name
         <input type="text" name="first_name" value={inputs.first_name} onChange={handleChange} required />          
        </label>
         
        <label name="last_name">
          Last name
          <input type="text" name="last_name" value={inputs.last_name} onChange={handleChange} required /> 
        </label>

        <label name="password">
          Password (6 characters minimum) 
          <input type="password" name="password" value={inputs.password} onChange={handleChange} required />  
        </label>

        <label name="password_confirmation">
          Password confirmation
          <input type="password" name="password_confirmation" value={inputs.password_confirmation} onChange={handleChange} required />  
        </label>
        <button>Sign Up</button>                                
      </form>
    </div>
  )
}

export default Register
