import React from 'react'
import CreateArticlePage from '../components/Article/CreateArticlePage'
import Register from '../components/Register'
import ArticleList from '../components/Article/ArticleList'
import Landing from '../components/Landing'
import Login from '../components/Login'
import { Route, Switch } from 'react-router-dom';
import { useAuthDataContext } from '../actions/AuthDataProvider'

const PrivateRoute = ({ component, ...options }) => {
  const { logged_in } = useAuthDataContext();
  const finalComponent = logged_in ? component : Login;

  return <Route {...options} component={finalComponent} />;
};

const Router = () => (
  <>
    <Switch>
      <Route exact path="/" render={() => <Landing />} />
      <Route exact path="/register" render={() => <Register />} />
      <Route exact path="/articles" render={() => <ArticleList />} />
      <PrivateRoute exact path="/create" render={(routeProps) => <CreateArticlePage {...routeProps} />} />
    </Switch>
  </>
)

export default Router
