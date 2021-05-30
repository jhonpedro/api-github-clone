import { ReduxState } from '../store'

interface UserSelector {
  username: string
  token: string
  error: string[]
}

function userSelector(state: ReduxState): UserSelector {
  if (state && state.auth.token) {
    return state.auth
  }

  const username = localStorage.getItem('username')
  const token = localStorage.getItem('token')

  const usernameAndTokeInLocalStorage: UserSelector = {
    username: !username ? '' : username,
    token: !token ? '' : token,
    error: [],
  }

  return usernameAndTokeInLocalStorage
}

export default userSelector
