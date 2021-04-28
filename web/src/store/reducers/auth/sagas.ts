import { AxiosResponse } from 'axios'
import { put, call, takeLatest } from 'redux-saga/effects'
import axios from '../../../services/axios'
import { SingInI } from '../../actions'
import {
  SING_IN_ERROR,
  SING_IN_SUCCESS,
  SING_IN_REQUEST,
} from '../../actionsTypes'

function* fetchAuth(action: SingInI) {
  try {
    const response: AxiosResponse = yield call(axios.post, '/users/', {
      userName: action.payload.username,
    })

    const tokenAndUsername = {
      token: response.data.token,
      username: action.payload.username,
    }

    yield put({
      type: SING_IN_SUCCESS,
      payload: tokenAndUsername,
    })

    yield action.callback(tokenAndUsername)
  } catch (error) {
    yield put({ type: SING_IN_ERROR })
  }
}

function* authSaga() {
  yield takeLatest(SING_IN_REQUEST, fetchAuth)
}

export default authSaga
