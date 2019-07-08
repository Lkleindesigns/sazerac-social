import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Navbar from "../Navbar/Navbar";
import ArticleList from "../Article/ArticleList";
import Protected from '../Protected'
import { useAuthDataContext } from '../AuthDataProvider/AuthDataProvider' 


const PrivateRoute = ({ component, ...options }) => {
  const authData = useAuthDataContext();
  const finalComponent = authData.logged_in ? component : ArticleList;

  return <Route {...options} component={finalComponent} />;
};


const Router = () => {
  const authData = useAuthDataContext()
  return (
    <>
      {console.log(authData)}
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <ArticleList />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route
          exact
          path="/settings/profile"
          render={routeProps => <Profile {...routeProps} />}
        />
         <PrivateRoute path="/protected" component={Protected} />
      </Switch>
    </>
  );
};

export default Router;
