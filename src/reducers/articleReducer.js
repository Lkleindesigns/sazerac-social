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

export default (state = initialState, action) => {
  switch(action.type) {
    case "INIT_ARTICLES":
      return action.articles
    default:
      return state;
  }
}
