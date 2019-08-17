import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import AuthDataProvider from './actions/AuthDataProvider'
import ArticleProvider from './actions/ArticleContext'
import * as serviceWorker from './serviceWorker';

const MyApp = props => (
  <BrowserRouter>
    <AuthDataProvider>
      <ArticleProvider>
        <App />
      </ArticleProvider>
    </AuthDataProvider>
  </BrowserRouter>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
