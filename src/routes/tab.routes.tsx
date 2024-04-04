import { CommonTabs } from './common'

import { user } from '../utils/user'

export default function TabRoutes() {
  switch (user.type) {
    case 'common':
      return <CommonTabs />
    case 'producer':
      return 
    case 'admin':
      return 
    default:
      return <CommonTabs />
  }
}