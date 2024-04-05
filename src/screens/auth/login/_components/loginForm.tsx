import { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Alert, Text } from 'react-native'

import { useAuth } from '@/contexts/auth'

import { auth } from '@/services/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { theme } from '@/theme'
import { getLocal, storeLocal } from '@/services/local-storage'
import { User } from '@/types/user'

const styles = StyleSheet.create({
  input: {
    height: 56,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.color.gray[400],
    borderRadius: 6,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',    
    padding: 32,
    gap: 16,
  },
})

export function LoginForm() {
  const { user } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleNewAccount() {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (credential) => {
        const user: User = {
          uid: credential.user.uid,
          email: credential.user.email,
        }
        await storeLocal('user', JSON.stringify(user))
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false))
  }

  return (
    <View style={styles.formContainer}>
      <TextInput style={styles.input} placeholder='Email' onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder='Senha' secureTextEntry onChangeText={setPassword} />
      <Button title='Cadastrar' onPress={handleNewAccount} />
      <Text>{user?.email}, {user?.uid}</Text>
    </View>
  )
}