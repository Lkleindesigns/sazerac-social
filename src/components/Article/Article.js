import React from "react";
import ReactHtmlParser from 'react-html-parser'

const Article = ({ article }) => {
  return (
    <div className="ArticleCard">
      <img alt={article.title} src={article.main_image} />
      <p className="ArticleCard-title">{article.title}</p>
      <div className="ArticleCard-body">
        <p>{new Date(article.created_at).toDateString()}</p>
        <p>{article.slug}</p>
        <div>{ReactHtmlParser(article.body)}</div>
      </div>
    </div>
  );
};

export default Article;
