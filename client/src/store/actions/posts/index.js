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

export const createPost = (title) => {
  console.log('puppies create')

  return async dispatch => {
    const response = await axios.post('http://localhost:3500/posts', {
      title
    })

    dispatch({
      type: 'CREATE_POST',
      payload: response.data.records
    })
  }
}