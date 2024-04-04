import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Login from '../screens/auth/login'
import SignUp from '../screens/auth/signup'
import TabRoutes from './tab.routes'
import AccountDetails from '../screens/profile/_screens/account-details'
import Trips from '../screens/profile/_screens/trips'
import { theme } from '../theme'
import { Feather } from '@expo/vector-icons'

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
      <Stack.Screen name='login' component={Login} />
      <Stack.Screen name='signup' component={SignUp} />
      <Stack.Screen name='tabs' component={TabRoutes} />

      {/* Profile */}
      <Stack.Group screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: theme.fontSize.sm,
          fontWeight: '500'
        },
        headerStyle: {
          backgroundColor: theme.color.white
        },
        headerShadowVisible: false,
      }}>
        <Stack.Screen name='accountDetails' component={AccountDetails} options={{
          title: String('Configurações').toUpperCase(),
        }} />
        <Stack.Screen name='trips' component={Trips} options={{
          title: String('Viagens').toUpperCase()
        }}/>
      </Stack.Group>
    </Stack.Navigator>
  )
}