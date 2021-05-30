import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionSetAuth } from '../store/actions'
import authSelector from '../store/selectors/auth'

const useSetAuth = () => {
  const auth = useSelector(authSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth) {
      dispatch(actionSetAuth({ username: auth.username, token: auth.token }))
    }
  }, [])
}

export default useSetAuth
