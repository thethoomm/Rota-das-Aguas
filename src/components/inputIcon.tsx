import { theme } from "@/theme"
import { Feather } from "@expo/vector-icons"
import { StyleSheet, TextInput, View } from "react-native"

interface InputIconProps {
  placeholder: string
  icon: keyof typeof Feather.glyphMap 
}

export function InputIcon({ placeholder, icon }: InputIconProps) {
  return (
    <View style={styles.searchSection}>
      <Feather style={styles.searchIcon} name={icon} size={20} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.color.gray[300],
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    padding: 10,
    color: theme.color.gray[600]
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: theme.color.gray[600],
  },
})