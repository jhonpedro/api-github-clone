import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import authSaga from './reducers/auth/sagas'

// Create saga middleware
const sagaMiddleware = createSagaMiddleware()
// Aply the middleware
const store = createStore(reducers, applyMiddleware(sagaMiddleware))
// Run saga middleware
sagaMiddleware.run(authSaga)

export default store

export type ReduxState = ReturnType<typeof store.getState>
