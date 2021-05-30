import { SING_IN_REQUEST, SET_USER_AND_TOKEN } from './actionsTypes'

export function actionSingIn(username: string, callback: Function) {
  return {
    type: SING_IN_REQUEST,
    payload: { username },
    callback,
  }
}

interface SetAuth {
  username: string
  token: string
}

export function actionSetAuth(newAuth: SetAuth) {
  return {
    type: SET_USER_AND_TOKEN,
    payload: newAuth,
  }
}

export type ActionSingInI = ReturnType<typeof actionSingIn>
