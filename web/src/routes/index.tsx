import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import User from '../pages/User'
import SingIn from '../pages/SingIn'
import Route from './Route'

function Routes() {
  return (
    <Switch>
      <Route path="/sing-in">
        <SingIn />
      </Route>
      <Route path="/:username">
        <User />
      </Route>
      <Route path="*">
        <Redirect to="/sing-in" />
      </Route>
    </Switch>
  )
}

export default Routes
