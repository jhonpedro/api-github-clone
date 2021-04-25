import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  size: string
}

export const ButtonContainer = styled.div<ButtonContainerProps>`
  ${(props) => css`
    width: ${props.size};
  `}
`

export const ButtonElement = styled.button`
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  background: var(--color-yellow);
  border: none;
  border-radius: 1rem;

  svg {
    margin-left: 0.5rem;
  }
`
