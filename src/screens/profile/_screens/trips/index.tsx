import { SafeAreaView, StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import { theme } from "@/theme";

export default function Trips() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>Trips</Text>
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