import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { theme } from "../../../../theme";

export default function AccountDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>Account Details</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.white,
  }
})