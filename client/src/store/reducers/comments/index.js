const commentReducer = (state = null, action) => {
  switch(action.type) {
    case 'GET_COMMENTS_BY_POST_ID':
      console.log('comment state', action.payload)

      return { ...state}

    case 'CREATE_COMMENT_FOR_POST':
      if (!state) {
        const { id, postId, text } = action.payload
        const comment = {
          postId,
          comments: [{ id, text }]
        }
        return { ...state, comment}
      }
      return { ...state }

    default: 
      return state
  }
}

export default commentReducer