import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Icons
import { Ionicons } from '@expo/vector-icons'

// Screens
import Home from '../screens/home'
import Profile from '../screens/profile'
import Routes from '../screens/routes'
import Saved from '../screens/saved'
import { theme } from '../theme'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 64,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginTop: -4,
        marginBottom: 7
      },
      tabBarActiveTintColor: theme.color.primary,
      tabBarInactiveTintColor: theme.color.gray[400],
    }}>
      <Tab.Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />,
          tabBarLabel: 'Início',
        }} />
      <Tab.Screen
        name='routes'
        component={Routes}
        options={{
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'map' : 'map-outline'} color={color} size={size}/>,
          tabBarLabel: 'Rotas'
        }} />
      <Tab.Screen
        name='saved'
        component={Saved}
        options={{
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'bookmark' : 'bookmark-outline'} color={color} size={size} />,
          tabBarLabel: 'Salvos'
        }} />
        <Tab.Screen
          name='profile'
          component={Profile}
          options={{
            tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size} />,
            tabBarLabel: 'Perfil'
          }} />
    </Tab.Navigator>
  )
}