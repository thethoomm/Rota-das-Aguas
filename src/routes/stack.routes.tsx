import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Login from '../screens/auth/login'
import SignUp from '../screens/auth/signup'
import TabRoutes from './tab.routes'
import AccountDetails from '../screens/profile/_screens/account-details'
import Trips from '../screens/profile/_screens/trips'

export type RootStackNavigationParamsList = {
  // Root Stack
  login: undefined
  signup: undefined
  tabs: undefined

  // Profile
  accountDetails: undefined
  trips: undefined
}

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='login' screenOptions={{
      headerShown: false
    }}>
      {/* Root Stack */}
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='signup' component={SignUp}/>
      <Stack.Screen name='tabs' component={TabRoutes}/>

      {/* Profile */}
      <Stack.Screen name='accountDetails' component={AccountDetails}/>
      <Stack.Screen name='trips' component={Trips}/>
    </Stack.Navigator>
  )
}