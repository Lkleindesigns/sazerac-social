import React from "react";
import Router from "./routers/Router";
import { useAuthDataContext } from "./actions/AuthDataProvider";
import { Link } from "react-router-dom";
import "./styles/App.css";

function App() {
  const { current_user } = useAuthDataContext();

  const isWriter = current_user
    ? current_user.roles.find(m => {
        return m.name === "writer";
      })
    : null;

  return (
    <div>
      <Router />
      <Link to="/">Landing </Link>
      <Link to="/register">Sign up</Link>
      <Link to="/articles">Articles</Link>
      {isWriter ? <Link to="/publisher/article/new">Add post </Link> : null}
      <hr></hr>
      <div>{process.env.NODE_ENV}</div>
      <div>{process.env.PORT}</div>
      <div>{process.env.REACT_APP_PORT}</div>
    </div>
  );
}

export default App;
