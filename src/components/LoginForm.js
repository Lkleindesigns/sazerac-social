import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from  '../reducers/userReducer'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(loginUser(credentials))
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
          autoFocus
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          margin="dense"
          id="password"
          label="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <button>Login</button>
    </form>
  );
};

export default LoginForm;
