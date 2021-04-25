import styled from 'styled-components'
import { InputContainer } from '../../components/Input/styles'

export const SingInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  > svg {
    width: 40%;
    height: auto;
  }

  ${InputContainer} {
    width: 80%;
    margin-bottom: 1rem;
  }
`
