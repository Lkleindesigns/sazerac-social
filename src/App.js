import React, { useEffect } from "react";
import Router from "./routers/Router";
import { checkUserSession } from './reducers/userReducer' 
import { useDispatch } from 'react-redux'
import "./styles/App.css";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])


  return (
    <div>
      <Router />
      <div>{process.env.NODE_ENV}</div>
      <div>{process.env.PORT}</div>
      <div>{process.env.REACT_APP_PORT}</div>
    </div>
  );
}

export default App;
