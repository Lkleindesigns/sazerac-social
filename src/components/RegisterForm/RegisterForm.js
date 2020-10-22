import React, { useState } from "react";
import { registerUser } from '../../actions/userHelpers'

// needs form validations
const RegisterForm = ({handleClose}) => {
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
    registerUser(inputs)
  };

  return (
    <form onSubmit={handleSubmit}>
        <input
          autoFocus
          margin="dense"
          id="email"
          name="email"
          placeholder="Email Address"
          type="email"
          value={inputs.email}
          onChange={handleChange}
          required
        />
        <input
          margin="dense"
          id="display_name"
          placeholder="Display Name"
          name="display_name"
          type="text"
          value={inputs.display_name}
          onChange={handleChange}
          required
        />
        <input
          margin="dense"
          id="first_name"
          placeholder="First Name"
          name="first_name"
          type="text"
          value={inputs.first_name}
          onChange={handleChange}
          required
        />
        <input
          margin="dense"
          id="last_name"
          placeholder="Last Name"
          name="last_name"
          type="text"
          value={inputs.last_name}
          onChange={handleChange}
          required
        />
        <input
          margin="dense"
          id="password"
          placeholder="Password"
          name="password"
          type="password"
          value={inputs.password}
          onChange={handleChange}
          required
        />
        <input
          margin="dense"
          id="password_confirmation"
          placeholder="Password Confirmation"
          name="password_confirmation"
          type="password"
          value={inputs.password_confirmation}
          onChange={handleChange}
          required
        />
        <button>Sign up</button>
    </form>
  );
};

export default RegisterForm;
