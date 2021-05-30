import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actionSetAuth } from '../store/actions'

const useSetAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')

    if (!username || !token) {
      return
    }

    dispatch(actionSetAuth({ username, token }))
  }, [])
}

export default useSetAuth
