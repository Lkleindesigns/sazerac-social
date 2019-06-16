import React from 'react';
import ArticleList from './Article/ArticleList'
import Login from './Login/Login'
import Register from './Register/Register'
import './App.css'

const App = () => {
  return (
    <div className="">
      <header className="">
        <h1>Sazerac Social</h1>
        <Login />
        <Register />
        <ArticleList />
      </header>
    </div>
  );
}

export default App;
