import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { actions } from '../../../store'
import { comments } from '../../'

const List = (props) => {

  // ~~ Redux props
  const { 
    getAllPosts,
    posts
  } = props 

  useEffect(() => {
    getAllPosts()
  }, [getAllPosts])
  
  const renderPosts = () => {
    if (!posts) {
      return (
        <h1>Getting Posts</h1>
      )
    } else {
      const keys = Object.keys(posts)
      return keys.map(key => (
        <div 
          className='card'
          key={key}
          style={{width: '30%', marginBottom: '20px'}}
        >
          <div className='card-body'>
            <h3>{posts[key].title}</h3>
            <h5>Comments</h5>
            <comments.List 
              comments={posts[key].comments}
            />
            <comments.Create
              postId={key}
            />
          </div>
        </div>
      ))
      
    }
  }

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderPosts()}
    </div>
  )
}

const mapStateToProps = state => {
  if (!state.postsData) {
    return { ...state, posts: {} }
  }
  
  return {
    posts: state.postsData.posts
  }
}

export default connect(mapStateToProps, {
  getAllPosts: actions.getAllPosts
})(List)