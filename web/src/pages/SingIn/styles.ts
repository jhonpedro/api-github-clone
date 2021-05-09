import styled from 'styled-components'
import { InputContainer } from '../../components/Input/styles'

export const SingInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  padding: 0 10%;

  form {
    width: 100%;
  }

  > svg {
    width: 50%;
    height: auto;
  }

  ${InputContainer} {
    margin-bottom: 1rem;
  }
`
