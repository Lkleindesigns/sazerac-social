import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import articleReducer from './reducers/articleReducer'

const reducer = combineReducers({
  articles: articleReducer
})

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))