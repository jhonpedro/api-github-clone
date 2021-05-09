import React from 'react'
import { FiEdit, FiLogOut } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import UserProfile from '../../components/UserProfile'
import { ReduxState } from '../../store/store'

import { ActionButtons, UserContainer } from './styles'

function User() {
  const username = useSelector<ReduxState, string>((state: ReduxState) => {
    if (state) {
      return state.auth.username
    }

    return ''
  })

  return !username ? null : (
    <UserContainer>
      <ActionButtons>
        <button type="button">
          Editar <FiEdit />
        </button>
        <button type="button">
          Sair <FiLogOut />
        </button>
      </ActionButtons>
      <UserProfile username={username} />
    </UserContainer>
  )
}

export default User
