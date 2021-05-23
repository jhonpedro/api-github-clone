import React from 'react'
import { Switch } from 'react-router-dom'
import UserProfile from '../pages/User'
import SingIn from '../pages/SingIn'
import Route from './Route'

function Routes() {
  return (
    <Switch>
      <Route path="/sing-in">
        <SingIn />
      </Route>
      <Route path="/:username" isPrivate>
        <UserProfile />
      </Route>
    </Switch>
  )
}

export default Routes
