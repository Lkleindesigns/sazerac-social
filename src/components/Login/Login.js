import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { getUser } from '../../helpers/userHelpers' 

const Login = ({ handleClose, setUser }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

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
    getUser().then(data => setUser(data))
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

    </form>
  );
};

export default Login;
