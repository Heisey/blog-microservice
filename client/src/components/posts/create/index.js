import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../store'

const Create = (props) => {

  const {
    createPost
  } = props

  const [input, inputHandler] = useState('')

  const handleInput = e => {
    inputHandler(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    createPost(input)

    inputHandler('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Title</label>
          <input
            value={input}
            onChange={handleInput}
            className='form-control'
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
  createPost: actions.createPost
})(Create)