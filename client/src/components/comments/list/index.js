import React from 'react'
// import { connect } from 'react-redux'
// import { actions } from '../../../store'

const List = (props) => {

  // ~~ parent props
  const { comments } = props

  const renderComments = () => {
    if (comments.length === 0) {
      return (
        <h1>No comments</h1>
      )
    } else {
      return comments.map(comment => (<span key={comment.id}>{comment.text}</span>))
    }
  }

  return (
    <div>
      {renderComments()}
    </div>
  )
}

export default List