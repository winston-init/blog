import React, { Component } from 'react'
import { FiSearch } from 'react-icons/fi'

import './styles.css'

class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
        <div className='search-icon'>
          <FiSearch size='1.5em' color='#A0A4B4' />
        </div>
        <div className='search'>
          <input type='text' placeholder='Search' />
        </div>
      </div>
    )
  }
}

export default SearchBar
