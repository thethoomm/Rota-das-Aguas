import { StyleSheet, Text, View } from "react-native"
import { Avatar } from "../../../components/avatar"
import { theme } from "../../../theme"

interface HeaderProps {
  children: React.ReactNode
}

// Styles
const styles = StyleSheet.create({
  header: {
    width: 'auto',
    height: 120,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerAvatar: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTitle: {
    flex: 1,
    textAlignVertical: 'center',
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.color.gray[600],
    textTransform: 'uppercase'
  }
})

export function Header({ children }: HeaderProps) {
  return (
    <View style={styles.header}>
      { children }
    </View>
  )
}

export function HeaderAvatar() {
  return (
    <View style={styles.headerAvatar}>
      <Avatar size={80}/>
    </View>
  )
}


interface HeaderTitleProps {
  title: string
}

export function HeaderTitle({ title }: HeaderTitleProps) {
  return (
    <Text style={styles.headerTitle}>
      { title }
    </Text>
  )
}