import {
  createPost,
  getAllPosts
} from './posts'

import {
  createComment,
  getCommentsByPostId
} from './comments'

const actions = {
  createComment,
  createPost,
  getAllPosts,
  getCommentsByPostId
}

export default actions