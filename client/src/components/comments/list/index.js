import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../store'

const List = (props) => {

  // ~~ parent props
  const { postId } = props

  // ~~ Redux props
  const { getComments } = props

  useEffect(() => {
    getComments(postId)
  }, [getComments, postId])

  return (
    <div>
      Puppy comment list
    </div>
  )
}

export default connect(null, {
  getComments: actions.getCommentsByPostId
})(List)