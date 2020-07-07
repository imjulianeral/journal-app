import { useState } from 'react'

export default function useForm(initialState = {}) {
  const [values, setValues] = useState(initialState)

  const reset = (newFormState = initialState) => {
    setValues(newFormState)
  }
  const handleChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  return [values, handleChange, reset]
}
