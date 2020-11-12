const postsReducer = (state = null, action) => {
  switch(action.type) {
    case 'GET_ALL_POSTS':
      return { ...state, posts: action.payload}

    case 'CREATE_POST':
      const posts = state.posts
      
      const {id, title} = action.payload

      posts[id] = {id, title}
      
      return { ...state, posts}

    default:
      return state
  }
}

export default postsReducer