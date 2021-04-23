import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SingIn from '../pages/SingIn'

function Routes() {
  return (
    <Switch>
      <Route path="/sing-in">
        <SingIn />
      </Route>
    </Switch>
  )
}

export default Routes
