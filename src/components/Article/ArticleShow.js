import React from 'react'
import ReactHtmlParser from 'react-html-parser'

const ArticleShow = ({article}) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>Article Id: {article.id}</p>
      <img src={article.main_image} alt={article.alt_text} />
      <p>Created At: {new Date(article.created_at).toDateString()}</p>
      <div>{ReactHtmlParser(article.body)}</div>
      <p>Published status: {article.status}</p>
      <p>Article User Id: {article.user_id}</p>
      <p>Last Updated: {new Date(article.updated_at).toDateString()}</p>
    </div>
  )
}

export default ArticleShow
