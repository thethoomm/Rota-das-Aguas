import { OptionType } from "@/types/profile-option"

export const commonOptions: OptionType[] = [
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