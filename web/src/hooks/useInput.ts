import { useCallback, useMemo, useState } from 'react'

const useInput = (initialValue = '', validation: any) => {
  const [value, setValue] = useState(initialValue)
  const [touched, setTouched] = useState(false)

  const isValid = useCallback(validation(value), [value])

  const wasTouchedAndIsInvalid = useMemo(
    () => touched && !isValid,
    [touched, isValid]
  )

  const onBlur = useCallback(() => setTouched(true), [])

  return [value, setValue, isValid, wasTouchedAndIsInvalid, onBlur]
}

export default useInput
