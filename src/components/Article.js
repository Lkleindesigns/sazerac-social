import React from 'react'

const Article = ({article}) => {
  return (
    <div key={article.id}>
      <h3>{article.title}</h3>
      <p>{article.user_id}</p>
      <img src={article.main_image} alt={article.main_image_alt_text} />
      <p>{article.body}</p>

    </div>
  )
}

export default Article