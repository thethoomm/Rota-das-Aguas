import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Login from '../screens/login'
import TabRoutes from './tab.routes'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName='login' screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='tab' component={TabRoutes} />
    </Stack.Navigator>
  )
}