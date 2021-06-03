import { useState } from 'react'

const useInput = (initialValue = '', validation: any) => {
  const [value, setValue] = useState(initialValue)
  const [touched, setTouched] = useState(false)

  const isValid = validation(value)

  const wasTouchedAndIsInvalid = touched && !isValid

  const onBlur = () => setTouched(true)

  return [value, setValue, isValid, wasTouchedAndIsInvalid, onBlur]
}

export default useInput
