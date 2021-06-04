import styled, { css } from 'styled-components'

interface InputPlaceholderProps {
  isUp: boolean
}

interface InputContainerProps {
  showErrorBorder: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;
  position: relative;
  padding: 0.5rem 0.5rem 0;
  border-radius: 1rem;

  ${(props) => {
    if (props.showErrorBorder) {
      return css`
        border: 1px solid var(--color-red);
      `
    }
    return css``
  }}
`

export const ErrorMessage = styled.span`
  display: block;
  font-weight: bold;
  text-align: center;
  color: var(--color-red);
`

export const InputPlaceholder = styled.span<InputPlaceholderProps>`
  position: absolute;
  top: 1.6rem;
  left: 1.5rem;
  color: var(--color-dark);
  transition: 300ms;

  ${(props) => {
    if (props.isUp) {
      return css`
        top: -1.8rem;
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
