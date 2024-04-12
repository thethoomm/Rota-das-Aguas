import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Icons
import { Ionicons } from '@expo/vector-icons'

// Screens
import Home from '@/screens/home'
import Profile from '@/screens/profile'
import Routes from '@/screens/routes'
import Saved from '@/screens/saved'
import { theme } from '@/theme'

const Tab = createBottomTabNavigator()

export function CommonTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        height: 64,
        borderTopWidth: 0,
        elevation: 0,
        backgroundColor: theme.color.white
      },
      tabBarLabelStyle: {
        fontFamily: theme.font.bold,
        fontSize: theme.fontSize.xs,
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
          tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? 'map' : 'map-outline'} color={color} size={size} />,
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