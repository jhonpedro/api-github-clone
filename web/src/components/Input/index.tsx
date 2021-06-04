import React, {
  FocusEvent,
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  InputContainer,
  InputPlaceholder,
  InputElement,
  ErrorMessage,
} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string
  showError: boolean
  placeholder: string
  type?: string
  onBlur?: () => {}
}

const Input: React.FC<InputProps> = React.memo(
  ({
    errorMessage,
    showError,
    type,
    value,
    placeholder,
    onBlur: outsideHandleBlur,
    ...rest
  }) => {
    const [isUp, setIsUp] = useState(!!value)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (value && !isUp) {
        setIsUp(true)
      }
    }, [value])

    const handleBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
      if (outsideHandleBlur) {
        outsideHandleBlur()
      }
      if (event.target.value === '') {
        setIsUp(false)
        return
      }
      setIsUp(true)
    }, [])

    const handleFocus = useCallback(() => {
      setIsUp(true)
    }, [])

    const handleClickRedirectToInput = useCallback(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, [])

    return (
      <InputContainer showErrorBorder={showError}>
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
        {showError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </InputContainer>
    )
  }
)

export default Input
