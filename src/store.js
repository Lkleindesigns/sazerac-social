import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import articleReducer from './reducers/articleReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  articles: articleReducer,
  user: userReducer
})

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))