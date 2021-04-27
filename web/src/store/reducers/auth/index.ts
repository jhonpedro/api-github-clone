import { SING_IN_SUCCESS, SING_IN_ERROR } from '../../actionsTypes'

const initialState = {
  token: '',
  error: [''],
}

type AuthReducerType = typeof initialState

export default function AuthReducer(
  state = initialState,
  action: any
): AuthReducerType {
  switch (action.type) {
    case SING_IN_SUCCESS: {
      const newState = { ...state, token: action.payload.token }
      return newState
    }
    case SING_IN_ERROR: {
      const newState = { ...state, error: ['an error ocurred'] }

      return newState
    }
    default:
      return state
  }
}
