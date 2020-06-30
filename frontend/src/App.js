import React, { Component } from 'react'
import Posts from './components/Posts'
import './App.css'

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'First post',
        content: {
          images: [
            'https://randomwordgenerator.com/img/picture-generator/55e3d1424a52ad14f1dc8460962e33791c3ad6e04e50744074267bd69748c4_640.jpg',
            'https://randomwordgenerator.com/img/picture-generator/55e0d2424954af14f1dc8460962e33791c3ad6e04e507440772d73d49745c0_640.jpg',
          ],
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        author: 'winston',
        date: '',
      },
    ],
  }

  postLayout = {
    width: '65%',
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingTop: '20px',
  }

  render() {
    return (
      <div style={this.postLayout}>
        <Posts posts={this.state.posts} />
      </div>
    )
  }
}

export default App
