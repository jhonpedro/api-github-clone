import React, { useState } from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { FaArrowRight } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { SingIn } from '../../store/actions'
import { SingInContainer } from './styles'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const { push } = useHistory()

  async function handleSingIn() {
    dispatch(
      SingIn(
        username,
        ({
          token,
          username: usernameInState,
        }: {
          token: string
          username: string
        }) => {
          localStorage.setItem('token', token)
          localStorage.setItem('username', usernameInState)

          push('/')
        }
      )
    )
  }

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
      <Button size="80%" onClick={handleSingIn}>
        ENTRAR <FaArrowRight color="var(--color-dark)" />{' '}
      </Button>
    </SingInContainer>
  )
}

export default LoginPage
