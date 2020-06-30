import React, { Component } from 'react'

export class Image extends Component {
  render() {
    return this.props.img.map((image, index) => (
      <img src={image} alt='' style={this.props.style} key={index} />
    ))
  }
}

export default Image
