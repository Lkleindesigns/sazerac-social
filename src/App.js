import React, { useEffect } from "react";
import Router from "./routers/Router";
import { checkUserSession } from './reducers/userReducer' 
import { useDispatch } from 'react-redux'
import "./styles/App.css";
import Container from '@material-ui/core/Container';
import { withTheme } from './components/styles/Theme'
import { CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

function App() {
  const dispatch = useDispatch()

  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh"
    },
  }));
  const classes = useStyles()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <>
      <CssBaseline />
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
