import React, { Component } from 'react'
import Image from './Image'
import PropTypes from 'prop-types'

export class PostItem extends Component {
  postItemLayout = {
    background: '#f0f0f0',
    marginBottom: '20px',
    padding: '10px 20px',
    boxSizing: 'border-box',
  }

  titlePost = {
    marginBottom: '20px',
    fontSize: '1.15rem',
  }

  italicTitle = {
    fontStyle: 'italic',
  }

  boldTitle = {
    fontWeight: '500',
  }

  imgContent = {
    display: 'flex',
    marginBottom: '10px',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  }

  imgPost = {
    maxWidth: '350px',
    flex: '1',
    borderRadius: '3px',
    margin: '5px',
  }

  textContent = {
    fontSize: '1.1rem',
  }

  render() {
    const { title, author, content } = this.props.post
    const { images, text } = content

    return (
      <div style={this.postItemLayout}>
        <div style={this.titlePost}>
          <span style={this.boldTitle}>{title}</span> by{' '}
          <span style={this.italicTitle}>{author}</span>
        </div>

        <div>
          <div style={this.imgContent}>
            <Image img={images} style={this.imgPost} />
          </div>
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostItem
