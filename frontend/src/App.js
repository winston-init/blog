import React from 'react'
import Header from './components/Header/index'
import Main from './components/Main/index'
import { usePromiseTracker } from 'react-promise-tracker'
import Loader from 'react-promise-loader'
import './App.css'

const App = () => (
  <div className='App'>
    <Header />
    <Main />
    <Loader promiseTracker={usePromiseTracker} color={'#8499b1'} />
  </div>
)

export default App
