import React, {useEffect, useState} from 'react'
import Article from './Article'
import axios from 'axios'

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://morning-fortress-91258.herokuapp.com/articles.json')
    .then((data) => setArticles(data.data))
    .catch(err => console.log(err))

    console.log('memory leak')
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