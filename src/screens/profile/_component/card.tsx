import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Icons
import { FontAwesome } from "@expo/vector-icons";

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { RootStackNavigationParamsList } from '@/routes/stack.routes';

import { OptionType } from '@/types/profile-option';

import { theme } from "@/theme";



interface CardProps {
  option: OptionType
}

export default function Card({ option }: CardProps) {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackNavigationParamsList>>()

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => {
      navigation.navigate(option.ref)
    }}>
      <FontAwesome name={option.icon} color={theme.color.gray[600]} size={20} />
      <View style={styles.content}>
        <Text style={styles.title}>{option.title}</Text>
        <Text style={styles.description}>{option.description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.color.gray[300],
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12
  },
  content: {},
  title: {
    fontSize: theme.fontSize.md,
    fontWeight: '500',
    color: theme.color.gray[800], 
  },
  description: {
    fontSize: theme.fontSize.xs,
    color: theme.color.gray[800],
    fontStyle: 'italic'
  }
})