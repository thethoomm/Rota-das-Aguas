import { OptionType } from "../screens/profile/_component/card"

export const profileOptions: OptionType[] = [
  {
    id: 1,
    title: 'Viagens',
    description: 'Minhas viagens já feitas',
    icon: 'car',
    ref: 'trips'
  },
  {
    id: 2,
    title: 'Configurações',
    description: 'Minhas informações pessoais',
    icon: 'sliders',
    ref: 'accountDetails'
  }
]