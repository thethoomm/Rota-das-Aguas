import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Icons
import { Feather } from '@expo/vector-icons';

// Components
import Card from '@/screens/profile/_component/card';
import { Header, HeaderAvatar, HeaderTitle } from '@/screens/profile/_component/header';

// Utils
import { commonOptions } from '@/utils/common-options';
import { user } from '@/utils/user';
import { OptionType } from '@/types/profile-option';
import { producerOptions } from '@/utils/producer-options';

import { theme } from '@/theme';

export default function Profile() {

  const [renderList, setRenderList] = useState<OptionType[]>(commonOptions)

  useEffect(() => {
    defineRenderListType()
  }, [user.type])

  async function defineRenderListType() {
    switch(user.type) {
      case 'common': 
        setRenderList(commonOptions)
        return
      case 'producer':
        setRenderList(producerOptions)
        return
      case 'admin':
        return
      default:
        setRenderList(commonOptions)
    }
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header>
        <HeaderAvatar />
        <HeaderTitle title={user.name} />
      </Header>

      <ScrollView style={styles.optionList}>
        {
          renderList?.map(opt => (
            <Card key={opt.id} option={opt} />
          ))
        }
        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
          <Feather name='log-out' color={theme.color.destructive} size={20} />
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
    borderWidth: 1,
    borderColor: theme.color.destructive,
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
    color: theme.color.destructive,
    fontWeight: '600'
  }
});
