import {
  SING_IN_SUCCESS,
  SING_IN_ERROR,
  SET_USER_AND_TOKEN,
} from '../../actionsTypes'

const initialState = {
  token: '',
  username: '',
  error: [''],
}

export type AuthReducerType = typeof initialState

export default function AuthReducer(
  state = initialState,
  action: any
): AuthReducerType {
  switch (action.type) {
    case SING_IN_SUCCESS: {
      const newState = {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
      }
      return newState
    }
    case SING_IN_ERROR: {
      const newState = { ...state, error: ['an error ocurred'] }

      return newState
    }
    case SET_USER_AND_TOKEN: {
      const newState = {
        ...state,
        username: action.payload.username,
        token: action.payload.token,
      }

      return newState
    }
    default:
      return state
  }
}
