import React from 'react'

const ArticleShow = (props) => {
  function createMarkup() {
    return {__html: props.location.state.article.body}
  }
  return (
    <div>
      <h1>Article Show Page</h1>
      <img src={props.location.state.article.main_image} alt=""/>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
      <p>{props.location.state.article.created_at}</p>
      <p>{props.location.state.article.created_at}</p>
      <p>{props.location.state.article.id}</p>
      <p>{props.location.state.article.main_image_alt_text}</p>
      <p>{props.location.state.article.title}</p>
      <p>{props.location.state.article.slug}</p>
      <p>{props.location.state.article.status}</p>
      <img src={props.location.state.article.thumb_image} alt=""/>
      <p>{props.location.state.article.updated_at}</p>
      <p>{props.location.state.article.user_id}</p>
      {console.log(props.location.state)}
    </div>
  )
}

export default ArticleShow
