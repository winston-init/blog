import React, { Component } from 'react'
import Post from '../Post/index'
import api from './../../services/api'

import './styles.css'

export class Main extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.loadPosts()
  }

  loadPosts = async () => {
    const response = await api.get('/posts')

    this.setState({ posts: response.data })
  }

  render() {
    return (
      <main className='main'>
        <div className='grid'>
          {this.state.posts.map(post => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </main>
    )
  }
}

export default Main
