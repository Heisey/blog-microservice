import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../store'

const List = (props) => {

  // ~~ parent props
  const { postId } = props

  // ~~ Redux props
  const { comments, getComments } = props

  useEffect(() => {
    getComments(postId)
  }, [getComments, postId])

  // console.log('puppies', comments)

  return (
    <div>
      Puppy comment list
    </div>
  )
}

const mapStateToProps = state => {
  
  if (!state.commentData) {
    return { ...state, comments: {} }
  }

  return {
    ...state,
    comments: state.commentData
  }
}

export default connect(mapStateToProps, {
  getComments: actions.getCommentsByPostId
})(List)