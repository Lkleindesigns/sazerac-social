import React from "react";
import CreateArticlePage from "../components/Article/CreateArticlePage";
import Register from "../components/Register";
import ArticleList from "../components/Article/ArticleList";
import ArticleShow from '../components/Article/ArticleShow';
import Landing from "../components/Landing";
import { Route, Switch } from "react-router-dom";
import { useAuthDataContext } from "../actions/AuthDataProvider";
import { useArticleContext } from '../actions/ArticleContext';

// const PrivateRoute = ({ component, ...options }) => {
//   const { logged_in } = useAuthDataContext();
//   const finalComponent = logged_in ? component : Login;

//   return <Route {...options} component={finalComponent} />;
// };

const PrivateWriterRoute = ({ component, ...options }) => {
  const { current_user } = useAuthDataContext();
  let writer = current_user
    ? current_user.roles.find(m => {
        return m.name === "writer";
      })
    : null;

  const finalComponent = writer ? component : ArticleList;

  return <Route {...options} component={finalComponent} />;
};

const Router = () => {
  const articles = useArticleContext()

  const findArticle = id => {
    return articles.find(function(article) {
      return article.slug === id
    })
  }

  return(
    <>
      <Switch>
        <Route exact path="/" render={() => <Landing />} />
        <Route exact path="/register" render={() => <Register />} />
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
