import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const Login = ({ handleClose, setUser }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const getUser = async () => {
    let test = await fetch("https://morning-fortress-91258.herokuapp.com/api/v1/current_user", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => (data));
    if(test.current_user) {
      setUser(test.current_user.display_name)
    } else {
      console.log('wrong', test)
    }
  };

  const deleteUser = async () => {
    await fetch("https://morning-fortress-91258.herokuapp.com/api/v1/sessions", {
      method: "DELETE",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => console.log(data));
      setUser(null)
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch(
      "https://morning-fortress-91258.herokuapp.com/api/v1/sessions",
      {
        method: "POST",
        body: JSON.stringify(credentials),
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(response => console.log("Success:",response))
      .catch(error => console.error("Error:", error));
    getUser()
    handleClose();
  };

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={credentials.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          required
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleSubmit} color="primary">Login</Button>
        <Button onClick={handleClose} color="primary">Cancel</Button>
      </DialogActions>
      <Button onClick={getUser} color="primary">getUser</Button>
      <Button onClick={deleteUser} color="primary">deleteUser</Button>
    </form>
  );
};

export default Login;
