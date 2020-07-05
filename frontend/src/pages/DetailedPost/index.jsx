import React, { useEffect, useState } from 'react'
import api from '../../services/api'

function DetailedPost(props) {
  const [post, setPost] = useState([])

  useEffect(() => {
    const { id } = props.match.params
    async function fetchPost() {
      const { data } = await api.get(`/posts/${id}`)
      setPost(data)
    }
    fetchPost()
  })

  return (
    <div className='post-detailed'>
      <h1>{`Post ${post._id}`}</h1>
    </div>
  )
}

export default DetailedPost
