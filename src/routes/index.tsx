import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from '@/routes/stack.routes'

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes/>
    </NavigationContainer>
  )
}