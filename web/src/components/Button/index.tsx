import React, { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonElement } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string
}

const Button: React.FC<ButtonProps> = ({ children, size }) => {
  const sizeToContainer = !size ? 'auto' : size

  return (
    <ButtonContainer size={sizeToContainer}>
      <ButtonElement>{children}</ButtonElement>
    </ButtonContainer>
  )
}

export default Button
