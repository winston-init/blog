import React, { Component } from 'react'

export class PostItem extends Component {
  render() {
    return (
      <div>
        <p>{this.props.post.title}</p>
      </div>
    )
  }
}

export default PostItem
