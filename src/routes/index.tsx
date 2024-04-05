import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from '@/routes/stack.routes'
import { AuthContext, AuthProvider } from '@/contexts/auth'

export default function Routes() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </AuthProvider>
  )
}