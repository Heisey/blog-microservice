import axios from 'axios'

export const getCommentsByPostId = (postId) => {
  return async dispatch => {
    const url = `http://localhost:4000/posts/${postId}/comments`
    const response = await axios.get(url)
    const records = {[postId]: response.data.records}

    dispatch({
      type: 'GET_COMMENTS_BY_POST_ID',
      payload: records
    })
  }
}

export const createComment = (postId, text) => {
  return async dispatch => {
    const url = `http://localhost:4000/posts/${postId}/comments`
    const response = await axios.post(url, {
      text
    })

    const records = {...response.data.records, postId}

    dispatch({
      type: 'CREATE_COMMENT_FOR_POST',
      payload: records
    })
  }
}