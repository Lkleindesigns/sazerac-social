import React, {useEffect, useState} from 'react'
import ArticleCard from './ArticleCard'
import './ArticleList.css'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://morning-fortress-91258.herokuapp.com/articles.json')
    .then((response) => response.json())
    .then((data) => setArticles(data))
  }, [])

  return (
    <div className="ArticleList">
      <div className="ArticleList-cards">
        {articles.map((a) => (
          <div key={a.id}>
            <ArticleCard  article={a} />
            <ArticleCard  article={a} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleList