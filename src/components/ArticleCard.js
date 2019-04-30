import React from 'react'
import './ArticleCard.css'


const ArticleCard = ({article}) => {
  return (
    <div className="ArticleCard">
      {console.log(article)}
      <img alt={article.title} src={article.main_image} />
      <a href='/'><h4>{article.title}</h4></a> 
    </div>
  )
}

export default ArticleCard