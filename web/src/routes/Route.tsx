import React from 'react'
import { useSelector } from 'react-redux'
import {
  Redirect,
  Route as RouteFromRouter,
  RouteProps,
} from 'react-router-dom'
import authSelector from '../store/selectors/auth'

interface RoutePropsI extends RouteProps {
  isPrivate?: boolean
}

const Route: React.FC<RoutePropsI> = ({ children, isPrivate, ...rest }) => {
  const auth = useSelector(authSelector)

  if (!auth.token && isPrivate) {
    return <Redirect to="/sing-in" />
  }

  return <RouteFromRouter {...rest}>{children}</RouteFromRouter>
}

export default Route
