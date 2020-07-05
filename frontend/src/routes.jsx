import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main/index'
import DetailedPost from './pages/DetailedPost/index'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/posts/:id' component={DetailedPost} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
