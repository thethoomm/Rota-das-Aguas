import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Icons
import { Feather } from '@expo/vector-icons'

// Screens
import Home from '../screens/home'
import Profile from '../screens/profile'
import Routes from '../screens/routes'
import Saved from '../screens/saved'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />,
          tabBarLabel: 'Início'
        }} />
      <Tab.Screen
        name='routes'
        component={Routes}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name='map-pin' color={color} size={size}/>,
          tabBarLabel: 'Rotas'
        }} />
      <Tab.Screen
        name='saved'
        component={Saved}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name='bookmark' color={color} size={size} />,
          tabBarLabel: 'Salvos'
        }} />
        <Tab.Screen
          name='profile'
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name='user' color={color} size={size} />,
            tabBarLabel: 'Perfil'
          }} />
    </Tab.Navigator>
  )
}