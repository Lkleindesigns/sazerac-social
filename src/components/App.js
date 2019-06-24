import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import ArticleList from './Article/ArticleList'
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'
import Register from './Register/Register'
import './App.css'

const App = () => {
  return (
    <div className="">

        
        <Navbar />
        <NavLink to="/">Blog </NavLink>
        <NavLink to="/login">Login </NavLink>
        <NavLink to="/register">Sign Up</NavLink>
        
        <Switch>
          <Route exact path="/" render={() => <ArticleList />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
        </Switch>


      
    </div>
  );
}

export default App;
