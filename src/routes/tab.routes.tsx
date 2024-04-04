import { CommonTabs } from './common'

import { user } from '../utils/user'
import { ProducerTabs } from './producer'

export default function TabRoutes() {
  switch (user.type) {
    case 'common':
      return <CommonTabs />
    case 'producer':
      return <ProducerTabs/>
    case 'admin':
      return 
    default:
      return <CommonTabs />
  }
}