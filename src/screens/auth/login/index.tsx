import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';

import { LoginForm } from '@/screens/auth/login/_components/loginForm'

import { RootStackNavigationParamsList } from '@/routes/stack.routes';
import { getLocal } from '@/services/local-storage';
import { useEffect, useState } from 'react';
import { User } from '@/types/user';


import { db } from '@/services/firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationParamsList>>()

  async function getCidades() {
    await getDocs(collection(db, "cidades"))
      .then((query) => {
        const newData = query.docs.map(doc => ({
          ...doc.data()
        }))
        console.log(newData)
      })
  }

  useEffect(() => {
    getCidades()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Login</Text>
      <LoginForm />
      <Button title='Go to Home' onPress={() => navigation.navigate('tabs')}/>
      <Button title='Go to SignUp' onPress={() => navigation.navigate('signup')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 32,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
