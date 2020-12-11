import React, { useEffect } from "react";
import Router from "./routers/Router";
import { checkUserSession } from './reducers/userReducer' 
import { useDispatch } from 'react-redux'
import Container from '@material-ui/core/Container';
import { withTheme } from './styles/Theme'
import { CssBaseline } from '@material-ui/core'
import styles from './styles/AppStyles'
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch()

  const classes = styles()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" className={classes.root}>
        <Router />
        <div>{process.env.NODE_ENV}</div>
        <div>{process.env.PORT}</div>
        <div>{process.env.REACT_APP_PORT}</div>
      </Container>
    </>
  );
}

export default withTheme(App);
