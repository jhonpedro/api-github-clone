import React from 'react'
import { Switch } from 'react-router-dom'
import UserProfile from '../pages/UserProfile'
import SingIn from '../pages/SingIn'
import Route from './Route'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact isPrivate>
        <UserProfile />
      </Route>
      <Route path="/sing-in">
        <SingIn />
      </Route>
    </Switch>
  )
}

export default Routes
