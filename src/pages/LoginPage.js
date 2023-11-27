import React from 'react'
import { Button, Text, TextInput, View, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyledText from '../components/StyledText.js'
import { loginValidationSchema } from '../validationSchemas/login.js'

const initialValues = {
  email: '',
  password: '',
}

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <TextInput
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

const LoginPage = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              style={styles.textInput}
              placeholder="E-mail"
              name="email"
            />

            <FormikInputValue
              style={styles.textInput}
              placeholder="Password"
              name="password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log in">on press</Button>
          </View>
        )
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  form: {
    margin: 12,
  },
  error: {
    color: 'red',
  },
})

export default LoginPage
