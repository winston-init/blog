import React from 'react'
import Header from './components/Header/index'
import Routes from './routes'
import { usePromiseTracker } from 'react-promise-tracker'
import Loader from 'react-promise-loader'
import './App.css'

const App = () => (
  <div className='App'>
    <Header />
    <Routes />
    <Loader promiseTracker={usePromiseTracker} color={'#8499b1'} />
  </div>
)

export default App
