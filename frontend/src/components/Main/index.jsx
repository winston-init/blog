import React, { Component } from 'react'
import Post from '../Post/index'

import './styles.css'

export class Main extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Why is the Tesla Cybertruck designed the way it is?',
        image:
          'https://randomwordgenerator.com/img/picture-generator/57e8d1454e50a414f1dc8460962e33791c3ad6e04e507441722a72dc9244c4_640.jpg',
        tag: 'Technology',
        description: "An explosion into the truck's polarising design",
        author: 'Carrie Brewer',
        date: '2h ago',
      },
      {
        id: 2,
        title: "How to Keep Going When You Don't Know What's Next",
        image:
          'https://randomwordgenerator.com/img/picture-generator/57e0d7454e51a414f1dc8460962e33791c3ad6e04e5074417c2e7dd39f4dcc_640.jpg',
        tag: 'Popular',
        description:
          'The future can be scary, but there are ways to deal with that fear',
        author: 'Jerome Walton',
        date: 'Yesterday',
      },
      {
        id: 3,
        title: '10 Rules of Dashboard Design',
        image:
          'https://randomwordgenerator.com/img/picture-generator/53e3d74b4c5baf14f1dc8460962e33791c3ad6e04e507440762e7ad39048c4_640.jpg',
        tag: 'Design',
        description: 'Dashboard Design Guidelines',
        author: 'Lewis Daniels',
        date: '23 Dec 2019',
      },
    ],
  }

  render() {
    return (
      <main className='main'>
        {this.state.posts.map(post => (
          <Post post={post} />
        ))}
      </main>
    )
  }
}

export default Main
