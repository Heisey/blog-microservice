const commentReducer = (state = null, action) => {
  switch(action.type) {
    case 'GET_COMMENTS_BY_POST_ID':
      if (!action.payload) {
        return { ...state }
      }
      const keys = Object.keys(action.payload)
      const postIdKey = keys[0]
      return { ...state, [postIdKey]: action.payload[postIdKey] }

    case 'CREATE_COMMENT_FOR_POST':
      const { id, postId, text } = action.payload

      const comment = {
        comments: [{ id, text }]
      }
      
      if (state === null) {
        console.log('first comment create')
        return { ...state, postId: comment}
      } else {
        console.log('add to comments')
        const records = state[postId]
        records.push({id, text})
        return {...state, [postId]: records[postId] }
      }
      
    default: 
      return state
  }
}

export default commentReducer