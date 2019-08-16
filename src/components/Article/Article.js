import React from "react";

const Article = ({ article }) => {

  function createMarkup() {
    return { __html: article.body}
  }
  return (
    <div className="ArticleCard">
      <img alt={article.title} src={article.main_image} />
      <p className="ArticleCard-title">{article.title}</p>
      <div className="ArticleCard-body">
        <p>{new Date(article.created_at).toDateString()}</p>
        <p>{article.slug}</p>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </div>
  );
};

export default Article;
