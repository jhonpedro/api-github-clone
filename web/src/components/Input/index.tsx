import React, { FocusEvent, InputHTMLAttributes, useRef, useState } from 'react'
import { InputContainer, InputPlaceholder, InputElement } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string
  showError: boolean
  placeholder: string
  type?: string
}

const Input: React.FC<InputProps> = ({
  errorMessage,
  showError,
  type,
  value,
  placeholder,
  ...rest
}) => {
  const [isUp, setIsUp] = useState(!!value)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    if (event.target.value === '') {
      setIsUp(false)
      return
    }
    setIsUp(true)
  }

  function handleFocus() {
    setIsUp(true)
  }

  function handleClickRedirectToInput() {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <InputContainer>
      <InputPlaceholder isUp={isUp} onClick={handleClickRedirectToInput}>
        {placeholder}
      </InputPlaceholder>
      <InputElement
        value={value}
        type={!type ? 'text' : type}
        onBlur={handleBlur}
        onFocus={handleFocus}
        ref={inputRef}
        {...rest}
      />
    </InputContainer>
  )
}

export default Input
