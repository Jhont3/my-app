import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Escriba un email valido')
    .required('Email is required'),
  password: yup
    .string()
    .min(5, 'Too short!')
    .max(1000, 'Too long!')
    .required('password is required'),
})
