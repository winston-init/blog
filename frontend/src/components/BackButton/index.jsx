import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

function BackButton() {
  return (
    <Link to='/'>
      <button className='back-button'>
        <div className='arrow-left'>
          <FiArrowLeft size='1.5em' />
        </div>
        <div className='button-text'>Back</div>
      </button>
    </Link>
  )
}

export default BackButton
