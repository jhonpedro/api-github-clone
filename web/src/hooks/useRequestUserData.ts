import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from '../services/axios'

export interface UserI {
  id: number
  name: string
  email: string
  localization: string
  avatar: string
  username: string
  bio: string
  createdAt?: Date
  updatedAt?: Date
  followersCount: number
  followingCount: number
  repositoriesCount: number
}

const useRequestUserData = (username: string | undefined) => {
  const [user, setUser] = useState({} as UserI)
  const { push } = useHistory()

  useEffect(() => {
    if (username) {
      axios
        .get<any, AxiosResponse<UserI>>(`users/${username}`)
        .then((response) => {
          setUser(response.data)
        })
        .catch(() => push('/sing-in'))
    }
  }, [username])

  return user
}

export default useRequestUserData
