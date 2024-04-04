import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Icons
import { Ionicons } from '@expo/vector-icons'

// Screens
import Profile from '../../screens/profile'
import { theme } from '../../theme'

const Tab = createBottomTabNavigator()

export function ProducerTabs() {
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
        fontSize: 12,
        marginTop: -4,
        marginBottom: 7
      },
      tabBarActiveTintColor: theme.color.primary,
      tabBarInactiveTintColor: theme.color.gray[400],
    }}>
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