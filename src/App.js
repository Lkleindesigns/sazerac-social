import React from 'react';
import Router from './routers/Router'
import { Link } from 'react-router-dom'
import './styles/App.css';


function App() {
  return (
    <div>
      <Router />
      <Link to="/">Landing </Link>
      <Link to='/create'>Add post </Link>
      <Link to='/articles'>Articles</Link>
      <Link to='/register'>Sign up</Link>
    </div>
  );
}

export default App;
