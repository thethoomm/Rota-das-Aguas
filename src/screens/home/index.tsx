import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { theme } from '@/theme';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
