const commentReducer = (state = null, action) => {
  switch(action.type) {
    case 'GET_COMMENTS_BY_POST_ID':
      if (!action.payload) {
        return { ...state }
      }
      const keys = Object.keys(action.payload)
      console.log(action.payload)
      console.log(keys)
      const postIdKey = keys[0]
      return { ...state, [postIdKey]: action.payload[postIdKey] }

    case 'CREATE_COMMENT_FOR_POST':
      const { id, postId, text } = action.payload

      const comment = {
        comments: [{ id, text }]
      }
      console.log(state)
      if (!state && !state[postId]) {
        return { ...state, postId: comment}
      } else {
        const records = state[postId]
        records.push({id, text})
        return {...state, [postId]: records[postId] }
      }
      

    default: 
      return state
  }
}

export default commentReducer