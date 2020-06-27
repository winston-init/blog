import React, { Component } from 'react'
import Posts from './components/Posts'
import './App.css'

class App extends Component {
  state = {
    posts: [
      { id: 1, title: 'Take out the trash', completed: false },
      { id: 2, title: 'Dinner with wife', completed: false },
      { id: 3, title: 'Meeting with boss', completed: false },
    ],
  }

  render() {
    return (
      <div>
        <Posts posts={this.state.posts} />
      </div>
    )
  }
}

export default App
