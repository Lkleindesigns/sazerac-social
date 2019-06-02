import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    fetch("https://morning-fortress-91258.herokuapp.com/api/v1/sessions", {
      method: "POST",
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response =>
        console.log("Success:", JSON.stringify(response.data))
      )
      .catch(error => console.error("Error:", error));
  };

  const getUser = () => {
    fetch("https://morning-fortress-91258.herokuapp.com/api/v1/current_user", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(resp => console.log(resp.json()))
    .then(data => console.log(data))

  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button>Login</button>
      </form>
      <button onClick={getUser}>Get User</button>
    </div>
  );
};

export default Login;
