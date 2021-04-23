import React, { useState } from 'react'
import { DiGithubBadge } from 'react-icons/di'
import Input from '../../components/Input'

import { SingInContainer } from './styles'

function LoginPage() {
  const [username, setUsername] = useState('')

  function handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }

  return (
    <SingInContainer>
      <DiGithubBadge color="var(--color-yellow)" />
      <Input
        errorMessage="Usuário é obrigatório"
        showError={false}
        value={username}
        placeholder="Username"
        onChange={handleChangeUsername}
      />
    </SingInContainer>
  )
}

export default LoginPage
