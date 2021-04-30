import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserProfile from '../pages/UserProfile'
import SingIn from '../pages/SingIn'

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <UserProfile />
      </Route>
      <Route path="/sing-in">
        <SingIn />
      </Route>
    </Switch>
  )
}

export default Routes
