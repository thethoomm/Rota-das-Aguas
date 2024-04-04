import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Login from '../screens/auth/login'
import SignUp from '../screens/auth/signup'
import TabRoutes from './tab.routes'

export type RootStackNavigationParamsList = {
  login: undefined
  signup: undefined
  tabs: undefined
}

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='login' screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='signup' component={SignUp}/>
      <Stack.Screen name='tabs' component={TabRoutes} />
    </Stack.Navigator>
  )
}