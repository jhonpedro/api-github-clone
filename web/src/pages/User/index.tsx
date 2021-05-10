import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { FiEdit, FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import UserProfile from '../../components/UserProfile'
import axios from '../../services/axios'
import { ReduxState } from '../../store/store'

import { ActionButtons, UserContainer } from './styles'

export interface UserI {
  id: number
  name: string
  email: string
  localization: string
  avatar: string
  username: string
  bio: string
  createdAt: Date
  updatedAt: Date
  followersCount: number
  followingCount: number
  repositoriesCount: number
}

function User() {
  const username = useSelector<ReduxState, string>((state: ReduxState) => {
    if (state) {
      return state.auth.username
    }

    return ''
  })
  const isEditing = useState(false)
  const [user, setUser] = useState({} as UserI)

  useEffect(() => {
    if (username) {
      axios
        .get<any, AxiosResponse<UserI>>(`users/${username}`)
        .then((response) => {
          setUser(response.data)
        })
    } else {
      axios
        .get<any, AxiosResponse<UserI>>(
          `users/${localStorage.getItem('username')}`
        )
        .then((response) => {
          setUser(response.data)
        })
    }
  }, [username])

  return !isEditing ? null : (
    <UserContainer>
      <ActionButtons>
        <button type="button">
          Editar <FiEdit />
        </button>
        <button type="button">
          Sair <FiLogOut />
        </button>
      </ActionButtons>
      <UserProfile {...user} />
    </UserContainer>
  )
}

export default User
