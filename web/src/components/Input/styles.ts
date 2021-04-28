import styled, { css } from 'styled-components'

interface InputPlaceholderProps {
  isUp: boolean
}

export const InputContainer = styled.div`
  position: relative;
`

export const InputPlaceholder = styled.span<InputPlaceholderProps>`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  color: var(--color-dark);
  transition: 300ms;

  ${(props) => {
    if (props.isUp) {
      return css`
        top: 0;
        font-size: 1.1rem;
        color: var(--color-yellow);
      `
    }
    return css``
  }}
`

export const InputElement = styled.input`
  width: 100%;

  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  outline: none;
  border: none;
`
