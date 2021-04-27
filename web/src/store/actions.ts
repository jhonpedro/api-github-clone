import { SING_IN_REQUEST } from './actionsTypes'

export function SingIn(username: string, callback: Function) {
  return {
    type: SING_IN_REQUEST,
    payload: { username },
    callback,
  }
}

export type SingInI = ReturnType<typeof SingIn>
