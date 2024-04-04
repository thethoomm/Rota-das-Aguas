import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackNavigationParamsList } from '../../../routes/stack.routes';

export default function Login() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationParamsList>>()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Button title='Go to Home' onPress={() => navigation.navigate('tabs')}/>
      <Button title='Go to SignUp' onPress={() => navigation.navigate('signup')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});