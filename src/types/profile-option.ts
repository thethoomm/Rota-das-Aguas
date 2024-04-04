import { ComponentType } from "react";

import { RootStackNavigationParamsList } from '../routes/stack.routes';

import { FontAwesome } from "@expo/vector-icons";

type IconProps =  typeof FontAwesome extends ComponentType<infer P> ? P : never;

export type OptionType = {
  id: number
  title: string
  description: string
  icon: IconProps['name']
  ref: keyof RootStackNavigationParamsList
}