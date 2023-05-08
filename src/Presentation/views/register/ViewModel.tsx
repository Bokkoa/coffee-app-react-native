import React, { useState } from 'react'

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  })

  const register = () => {
    console.log(JSON.stringify(values))
  }

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value })
  }

  return {
    ...values,
    onChange,
    register
  }
}


export default RegisterViewModel