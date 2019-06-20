import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import ArticleList from './Article/ArticleList'
import Login from './Login/Login'
import Register from './Register/Register'
import './App.css'

const App = () => {
  return (
    <div className="">
      <header className="">
        <h1>Sazerac Social</h1>
        
        <NavLink to="/">Blog </NavLink>
        <NavLink to="/login">Login </NavLink>
        <NavLink to="/register">Sign Up</NavLink>
        
        <Switch>
          <Route exact path="/" render={() => <ArticleList />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
        </Switch>


      </header>
    </div>
  );
}

export default App;
