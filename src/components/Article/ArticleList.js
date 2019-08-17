import React from 'react'
import { Link } from 'react-router-dom'
import { useArticleContext } from '../../actions/ArticleContext'
import Article from './Article'

const ArticleList = () => {

  const articles = useArticleContext()

  return (
    <div className="ArticleList">
      <h1>Articles</h1>
      <div className="ArticleList-cards">
        {articles.map((a) => (
          <div key={a.id}>
            <Article article={a} />
            <Link to={`/articles/${a.slug}`}>Show more</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleList