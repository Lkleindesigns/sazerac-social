import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../reducers/userReducer";
import {
  TextField,
  Button,
  Grid,
  Avatar,
  Typography,
  FormControlLabel,
  Box,
  Link,
  Checkbox,
  Container,
} from "@material-ui/core";
import styles from "../styles/RegisterStyles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://sazerac-social.herokuapp.com/">
        Sazerac Social
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// needs form validations
const RegisterForm = () => {
  const dispatch = useDispatch();
  const classes = styles();

  const initialState = {
    email: "",
    display_name: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
  };
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs)
  };

  const handleSubmit = async (e) => {
    dispatch(registerUser(inputs));
    setInputs(initialState);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="first_name"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                value={inputs.first_name}
                onChange={handleChange}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="last_name"
                value={inputs.last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="display_name"
                label="Display Name"
                name="display_name"
                autoComplete="display_name"
                value={inputs.display_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={inputs.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                id="password_confirmation"
                value={inputs.password_confirmation}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default RegisterForm;
