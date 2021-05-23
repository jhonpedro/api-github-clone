import React, { useMemo } from 'react'
import { FiEdit, FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import UserProfile from '../../components/UserProfile'
import useRequestUserData from '../../hooks/requestUserData'
import userSelector from '../../store/selectors/user'

import { ActionButtons, UserContainer } from './styles'

interface UserRouteParams {
  username: string | undefined
}

function User() {
  const { username: usernameParam } = useParams<UserRouteParams>()
  const username = useMemo(() => usernameParam, [usernameParam])
  const { username: loggedUserUsername } = useSelector(userSelector)
  const user = useRequestUserData(username)

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
