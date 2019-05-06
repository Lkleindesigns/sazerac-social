import React, { useState } from 'react'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://morning-fortress-91258.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
  }

  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" value={credentials.email} onChange={handleChange} required  />
        <input name="password" type="password" value={credentials.password} onChange={handleChange} required />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
