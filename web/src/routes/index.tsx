import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import User from '../pages/User'
import SingIn from '../pages/SingIn'
import Route from './Route'
import useSetAuth from '../hooks/useSetAuth'
import EditUserProfile from '../pages/EditUser'

function Routes() {
  useSetAuth()

  return (
    <Switch>
      <Route path="/sing-in">
        <SingIn />
      </Route>
      <Route path="/edit/profile">
        <EditUserProfile />
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
