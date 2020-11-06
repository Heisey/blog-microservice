import { combineReducers } from 'redux'
import postsReducer from './posts'
import commentReducer from './comments'

export default combineReducers({
  commentData: commentReducer,
  postsData: postsReducer
})