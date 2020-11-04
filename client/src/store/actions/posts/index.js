import axios from 'axios'

export const getAllPosts = () => {

  return async dispatch => {
    const response = await axios.get('http://localhost:3500/posts')

    dispatch({
      type: 'GET_ALL_POSTS',
      payload: response.data.records
    })
  }
}