import { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native'

import { auth } from '@/services/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


const styles = StyleSheet.create({
  inputContainer: {
  },
  input: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
  },
})

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleNewAccount() {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => Alert.alert("Conta", JSON.stringify(credential.user)))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }

  return (
    <View style={styles.formContainer}>
      <TextInput placeholder='Email' onChangeText={setEmail} />
      <TextInput placeholder='Senha' secureTextEntry onChangeText={setPassword} />
      <Button title='Cadastrar' onPress={handleNewAccount} />
    </View>
  )
}