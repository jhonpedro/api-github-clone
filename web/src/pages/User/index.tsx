import React, { useMemo } from 'react'
import { FiEdit, FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import UserProfile from '../../components/UserProfile'
import useRequestUserData from '../../hooks/requestUserData'
import authSelector from '../../store/selectors/auth'

import { ActionButtons, UserContainer } from './styles'

interface UserRouteParams {
  username: string | undefined
}

function User() {
  const { username: usernameParam } = useParams<UserRouteParams>()
  const username = useMemo(() => usernameParam, [usernameParam])
  const user = useRequestUserData(username)
  const { username: loggedUserUsername } = useSelector(authSelector)

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
      <UserProfile
        id={user.id}
        name={user.name}
        email={user.email}
        localization={user.localization}
        avatar={user.avatar}
        username={user.username}
        bio={user.bio}
        followersCount={user.followersCount}
        followingCount={user.followingCount}
        repositoriesCount={user.repositoriesCount}
      />
    </UserContainer>
  )
}

export default User
