import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import articleReducer from './reducers/articleReducer'
import userReducer from './reducers/userReducer'
import themeReducer from './reducers/themeReducer'

const reducer = combineReducers({
  articles: articleReducer,
  user: userReducer,
  theme: themeReducer
})

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))