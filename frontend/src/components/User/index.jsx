import React from 'react'
import { FiUser } from 'react-icons/fi'

import './styles.css'

function User(props) {
  return (
    <div className='post-user'>
      <div className='user-photo'>
        <FiUser size='2.1em' />
      </div>
      <div>
        <div className='user-name'>{props.author}</div>
        <div className='post-date'>{props.date}</div>
      </div>
    </div>
  )
}

export default User
