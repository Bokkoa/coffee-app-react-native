import { useState } from 'react'
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth'
import { User } from '../../../Domain/entities/User'

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  })

  const register = async () => {
    const { result, error } = await RegisterAuthUseCase(values)
    console.log('Result ', JSON.stringify(result))
    console.log('Error ', JSON.stringify(error))
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