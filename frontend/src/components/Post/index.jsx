import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'

import './styles.css'

export class Post extends Component {
  render() {
    const { post } = this.props
    const date = new Date(post.date).toDateString()

    return (
      <div className='post'>
        <div className='post-image'>
          <img src={post.image} alt='' />
        </div>
        <div className='body-post'>
          <Link className='post-title' to={`/posts/${post._id}`}>
            {post.title}
          </Link>
          <div className='post-description'>{post.description}</div>
        </div>
        <div className='post-user'>
          <div className='user-photo'>
            <FiUser size='1.8em' />
          </div>
          <div className='user-info'>
            <div className='user'>{post.author}</div>
            <div className='date'>{date}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
