import React, { useState } from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { SingInContainer } from './styles'

const LoginPage = () => {
  const [username, setUsername] = useState('')

  async function handleChangeUsername(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
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
      <Button size="80%">
        ENTRAR <FaArrowRight color="var(--color-dark)" />{' '}
      </Button>
    </SingInContainer>
  )
}

export default LoginPage
