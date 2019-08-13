import React, {useEffect, useState} from 'react'
import Article from './Article'
import axios from 'axios'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://morning-fortress-91258.herokuapp.com/api/v1/articles', {
      withCredentials: true,

    })
    .then((data) => setArticles(data.data.articles))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="ArticleList">
      <h1>Articles</h1>
      <div className="ArticleList-cards">
        {articles.map((a) => (
          <div key={a.id}>
            <Article article={a} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleList