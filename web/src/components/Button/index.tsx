import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonElement } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string
}

const Button: React.FC<ButtonProps> = ({ children, size, ...rest }) => {
  const sizeToContainer = !size ? 'auto' : size

  return (
    <ButtonContainer size={sizeToContainer}>
      <ButtonElement {...rest}>{children}</ButtonElement>
    </ButtonContainer>
  )
}

export default Button
