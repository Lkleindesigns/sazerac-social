import React from 'react';
import ArticleList from './Article/ArticleList'
import Login from './Login/Login'
import './App.css'

const App = () => {
  return (
    <div className="">
      <header className="">
        <h1>Sazerac Social</h1>
        <Login />
        <ArticleList />
      </header>
    </div>
  );
}

export default App;
