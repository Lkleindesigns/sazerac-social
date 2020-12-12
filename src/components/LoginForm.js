import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducers/userReducer";
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
import styles from "../styles/LoginStyles";

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

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialState = { email: "", password: "" };
  const [credentials, setCredentials] = useState(initialState);
  const classes = styles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
    setCredentials(initialState);
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <Icon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            autoFocus
            margin="normal"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            variant="outlined"
            value={credentials.email}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            margin="normal"
            id="password"
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={credentials.password}
            onChange={handleChange}
            className={classes}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default LoginForm;
