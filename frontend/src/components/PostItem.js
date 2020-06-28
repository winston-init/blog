import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class PostItem extends Component {
  render() {
    const { title } = this.props.post

    return (
      <div style={{ background: '#ccc' }}>
        <p>{title}</p>
      </div>
    )
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostItem
