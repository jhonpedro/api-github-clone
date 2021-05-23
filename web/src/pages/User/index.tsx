import { AxiosResponse } from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { FiEdit, FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import UserProfile from '../../components/UserProfile'
import axios from '../../services/axios'
import userSelector from '../../store/selectors/user'

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

interface UserRouteParams {
  username: string | undefined
}

function User() {
  const { username: usernameParam } = useParams<UserRouteParams>()
  const username = useMemo(() => usernameParam, [usernameParam])
  const { username: loggedUserUsername } = useSelector(userSelector)
  const { push } = useHistory()

  const [user, setUser] = useState({} as UserI)

  useEffect(() => {
    axios
      .get<any, AxiosResponse<UserI>>(`users/${username}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch(() => {
        push('/sing-in')
      })
  }, [username])

  function editMyself() {}

  return (
    <UserContainer>
      {loggedUserUsername === usernameParam ? (
        <ActionButtons>
          <button type="button" onClick={editMyself}>
            Editar <FiEdit />
          </button>
          <button type="button">
            Sair <FiLogOut />
          </button>
        </ActionButtons>
      ) : null}
      <UserProfile {...user} />
    </UserContainer>
  )
}

export default User
