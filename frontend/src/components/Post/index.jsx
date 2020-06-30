import React, { Component } from 'react'

import './styles.css'

export class Post extends Component {
  render() {
    const { post } = this.props

    return (
      <div className='post'>
        <div className='post-image'>
          <img src={post.image} alt='' />
        </div>
        <div className='body-post'>
          <div className='post-title'>{post.title}</div>
          <div className='post-description'>{post.description}</div>
        </div>
        <div className='post-user'>
          <div className='user-photo'>
            <img src='' alt='' />
          </div>
          <div className='user-info'>
            <div className='user'>{post.author}</div>
            <div className='date'>{post.date}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
