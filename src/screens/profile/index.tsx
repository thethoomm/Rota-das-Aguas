import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header, HeaderAvatar, HeaderTitle } from './_component/header';
import { theme } from '../../theme';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Header>
        <HeaderAvatar/>
        <HeaderTitle title='Thomas Henrique'/>
      </Header>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
});
