import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import "./Register.css";

const Register = ({handleClose}) => {
  const [inputs, setInputs] = useState({
    email: "",
    display_name: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: ""
  });

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch("https://morning-fortress-91258.herokuapp.com/api/v1/users", {
      method: "POST",
      body: JSON.stringify({ user: inputs }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", response))
      .catch(error => console.error("Error:", error));
    handleClose()
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
          value={inputs.email}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          margin="dense"
          id="display_name"
          label="Display Name"
          name="display_name"
          type="text"
          value={inputs.display_name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          margin="dense"
          id="first_name"
          label="First Name"
          name="first_name"
          type="text"
          value={inputs.first_name}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          margin="dense"
          id="last_name"
          label="Last Name"
          name="last_name"
          type="text"
          value={inputs.last_name}
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
          value={inputs.password}
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          margin="dense"
          id="password_confirmation"
          label="Password Confirmation"
          name="password_confirmation"
          type="password"
          value={inputs.password_confirmation}
          onChange={handleChange}
          required
          fullWidth
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleSubmit} color="primary">
          Sign Up
        </Button>
        <Button onClick={handleClose} color="primary">Cancel</Button>
      </DialogActions>
    </form>
  );
};

export default Register;
