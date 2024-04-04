import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import SignIn from '../screens/auth/signin'
import SignUp from '../screens/auth/signup'
import TabRoutes from './tab.routes'

export type RootStackNavigationParamsList = {
  signin: undefined
  signup: undefined
  tabs: undefined
}

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='signin' screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='signin' component={SignIn}/>
      <Stack.Screen name='signup' component={SignUp}/>
      <Stack.Screen name='tabs' component={TabRoutes} />
    </Stack.Navigator>
  )
}