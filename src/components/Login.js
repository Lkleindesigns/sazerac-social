import React, { useState } from 'react'
import { useAuthDataContext } from '../actions/AuthDataProvider'
import { getUser, loginUser } from '../actions/userHelpers'

const Login = () => {
  const { onLogin, data } = useAuthDataContext()

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
      loginUser(credentials)
      .then(res => getUser())
      .then(user => onLogin({logged_in: user.data.logged_in, current_user: user.data.current_user}))
      .catch(error => console.error("Error:", error));
      
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
          { data ? console.log(data.user) : null}
    </form>
  );
};

export default Login;
