import React from 'react'
import { useSelector } from 'react-redux'
import {
  Redirect,
  Route as RouteFromRouter,
  RouteProps,
} from 'react-router-dom'
import { ReduxState } from '../store/store'

interface RoutePropsI extends RouteProps {
  isPrivate?: boolean
}

const Route: React.FC<RoutePropsI> = ({ children, isPrivate, ...rest }) => {
  const auth = useSelector((state: ReduxState) => state.auth)

  if (!auth.token && isPrivate) {
    return <Redirect to="/sing-in" />
  }

  return <RouteFromRouter {...rest}>{children}</RouteFromRouter>
}

export default Route
