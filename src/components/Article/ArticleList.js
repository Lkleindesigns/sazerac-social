import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Article from './Article'
import { initializeArticles } from '../../reducers/articleReducer'

const ArticleList = () => {
    const articles = useSelector(state => state.articles)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(initializeArticles())
    }, [dispatch])
    
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