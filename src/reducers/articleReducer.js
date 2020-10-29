import articleService from '../services/articles'
const initialState = []

export const initializeArticles = () => {
  return async dispatch => {
    const articles = await articleService.getAll()
    dispatch({
      type: "INIT_ARTICLES",
      articles
    })
  }
}

export const createArticle = (article) => {
  return async dispatch => {
    const newArticle = await articleService.create(article)
    dispatch({
      type: "CREATE_ARTICLE",
      data: newArticle
    })
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "INIT_ARTICLES":
      return action.articles
    case "CREATE_ARTICLE":
      return [...state, action.data]
    default:
      return state;
  }
}
