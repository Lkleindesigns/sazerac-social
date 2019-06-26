import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ArticleList from './Article/ArticleList'
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'
import Register from './Register/Register'
import './App.css'

const App = () => {
  return (
    <div className="">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <ArticleList />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
        </Switch>
    </div>
  );
}

export default App;
