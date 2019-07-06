import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ArticleList from './Article/ArticleList'
import Register from './Register/Register'
import Profile from './Profile/Profile'
import Navbar from './Navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <>
        <Navbar  />
        <Switch>
          <Route exact path="/" render={() => <ArticleList />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route exact path="/settings/profile" render={() => <Profile />} />
        </Switch>
    </>
  );
}

export default App;
