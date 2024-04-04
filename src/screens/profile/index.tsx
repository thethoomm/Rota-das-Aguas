import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Icons
import { Feather } from '@expo/vector-icons';

// Components
import Card from './_component/card';
import { Header, HeaderAvatar, HeaderTitle } from './_component/header';

import { theme } from '../../theme';
import { profileOptions } from '../../utils/profile-options';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header>
        <HeaderAvatar />
        <HeaderTitle title='Thomas Henrique' />
      </Header>

      <ScrollView style={styles.optionList}>
        {
          profileOptions.map(opt => (
            <Card key={opt.id} option={opt} />
          ))
        }
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
          <Feather name='log-out' color={theme.color.white} size={20} />
          <Text style={styles.logoutText}>Sair da conta</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.white,
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 32,
  },
  optionList: {
    flex: 1,
  },
  logoutButton: {
    backgroundColor: theme.color.destructive,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  logoutText: {
    fontSize: theme.fontSize.md,
    color: theme.color.white,
    fontWeight: '600'
  }
});
