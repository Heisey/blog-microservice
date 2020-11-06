import React, { useState }  from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../store'

const Create = (props) => {
  
  // ~~ parent props
  const { postId } = props;

  const { createComment } = props

  const [input, inputHandler] = useState('')

  const handleInput = e => {
    inputHandler(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    createComment(postId, input)

    inputHandler('')
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <div className='form-group'>
          <label>New Comment</label>
          <input 
            className='form-control'
            onChange={handleInput}
            value={input}
          />
        </div>
        <button className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default connect(null, {
  createComment: actions.createComment
})(Create)