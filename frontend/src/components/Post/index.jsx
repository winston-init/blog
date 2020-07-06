import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import User from './../User/index'

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
        <User author={post.author} date={date} />
      </div>
    )
  }
}

export default Post
