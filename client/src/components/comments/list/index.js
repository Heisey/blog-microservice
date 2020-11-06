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

  const renderComments = () => {
    if (!comments[postId]) {
      return (
        <h1>No comments</h1>
      )
    } else {
      return comments[postId].map(comment => (<span key={comment.id}>{comment.text}</span>))
    }
  }

  return (
    <div>
      {renderComments()}
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