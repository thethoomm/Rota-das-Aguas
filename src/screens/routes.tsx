import { StyleSheet, Text, View } from 'react-native';

export default function Routes() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Routes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
