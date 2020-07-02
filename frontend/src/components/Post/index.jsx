import React, { Component } from 'react'

import './styles.css'

export class Post extends Component {
  formatDate() {
    const { post } = this.props
    const date = new Date(post.date)
    const today = new Date()

    const hour = date.getHours()
    const day = date.getDate()
    const minute = date.getMinutes()
    const month = date.getMonth()

    if (today.getHours() >= hour && today.getMinutes() < minute) {
      const time = Math.abs(today.getMinutes() - minute)
      const unit = time === 1 ? 'minute' : 'minutes'

      return `${time} ${unit} ago`
    } else {
      const time = Math.abs(today.getHours() - hour)
      const unit = time === 1 ? 'hour' : 'minutes'
      return `${time} ${unit} ago`
    }

    // calculate month and year
  }

  render() {
    const { post } = this.props
    const date = new Date(post.date).toLocaleDateString()
    const time = this.formatDate()

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
            <div className='date'>{time}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post
