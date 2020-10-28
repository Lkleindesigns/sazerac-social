import React from "react";
import Navbar from "../components/Navbar";
import CreateArticlePage from "../components/Article/CreateArticlePage";
import RegisterForm from '../components/RegisterForm'
import ArticleList from "../components/Article/ArticleList";
import LoginForm from '../components/LoginForm'
import ArticleShow from '../components/Article/ArticleShow';
import Landing from "../components/Landing";
import { Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux'

// const PrivateRoute = ({ component, ...options }) => {
//   const { logged_in } = useSelector(state => state.user);
//   const finalComponent = logged_in ? component : Login;

//   return <Route {...options} component={finalComponent} />;
// };

const PrivateWriterRoute = ({ component, ...options }) => {
  const user = useSelector(state => state.user);

  if (!user) {
    return null
  }

  let writer = user.current_user
    ? user.current_user.roles.find(role => {
        return role.name === "writer";
      })
    : null;

  const finalComponent = writer ? component : ArticleList;

  return <Route {...options} component={finalComponent} />;
};

const Router = () => {
  const articles = useSelector(state => state.articles)

  const findArticle = id => {
    return articles.find(function(article) {
      return article.slug === id
    })
  }

  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/register" render={() => <RegisterForm />} />
        <Route exact path="/login" render={() => <LoginForm/>} />
        <Route exact path="/articles" render={() => <ArticleList />} />
        <Route exact path="/articles/:id" render={(routeProps) => <ArticleShow {...routeProps} article={findArticle(routeProps.match.params.id)} />} />
        <PrivateWriterRoute
          exact
          path="/publisher/article/new"
          render={routeProps => <CreateArticlePage {...routeProps} />}
        />
      </Switch>
    </>
  )
};

export default Router;
