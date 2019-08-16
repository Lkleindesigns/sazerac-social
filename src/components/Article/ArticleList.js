import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Article from './Article'
import axios from 'axios'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  const findArticle = id => {
    return articles.find(function(article) {
      return article.id === id
    })
  }

  useEffect(() => {
    axios.get('https://morning-fortress-91258.herokuapp.com/api/v1/articles', {
      withCredentials: true,

    })
    .then((res) => setArticles(res.data.articles))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="ArticleList">
      <h1>Articles</h1>
      <div className="ArticleList-cards">
        {articles.map((a) => (
          <div key={a.id}>
            <Article article={a} />
            <Link to={{ pathname: `/articles/${a.slug}`, state: {article: a}}} >Show more</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleList