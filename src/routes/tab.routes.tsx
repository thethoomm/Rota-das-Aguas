import { CommonTabs } from '@/routes/common'
import { ProducerTabs } from '@/routes/producer'

import { user } from '@/utils/user'

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