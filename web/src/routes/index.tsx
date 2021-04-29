import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserProfile from '../components/UserProfile'
import SingIn from '../pages/SingIn'

function Routes() {
  return (
    <Switch>
      <Route path="/">
        <UserProfile />
      </Route>
      <Route path="/sing-in">
        <SingIn />
      </Route>
    </Switch>
  )
}

export default Routes
