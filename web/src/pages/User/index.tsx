import React from 'react'
import { useSelector } from 'react-redux'
import UserProfile from '../../components/UserProfile'
import { ReduxState } from '../../store/reducers'

function User() {
  const username = useSelector<ReduxState, string>((state: ReduxState) => {
    if (state) {
      return state.auth.username
    }

    return ''
  })

  return !username ? null : <UserProfile username={username} />
}

export default User
