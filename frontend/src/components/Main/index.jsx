import React, { useState, useEffect } from 'react'
import Post from '../Post/index'
import SearchBar from './../SearchBar/index'
import api from './../../services/api'
import { trackPromise } from 'react-promise-tracker'

import './styles.css'

function Main() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await trackPromise(api.get('/posts'))
        setPosts(data)
      } catch (err) {
        console.log(err.response.data)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setFilteredPosts(
      posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, posts])

  function handleChange(e) {
    setSearch(e.target.value)
  }

  return (
    <main className='main'>
      <SearchBar onChange={handleChange} />

      <div className='grid'>
        {filteredPosts.map(post => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </main>
  )
}

export default Main
