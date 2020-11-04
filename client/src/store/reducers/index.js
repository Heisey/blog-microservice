import { combineReducers } from 'redux'
import postsHandler from './posts'

export default combineReducers({
  postsData: postsHandler
})