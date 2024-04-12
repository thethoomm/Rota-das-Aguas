import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { theme } from '@/theme';

import { InputIcon } from '@/components/inputIcon';
import { Map } from '@/components/map';
import { Feather } from '@expo/vector-icons';

import { routeList } from '@/utils/route-list';
import { RouteCard } from './_components/route_card';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.copy}>Para onde você quer ir?</Text>
          <InputIcon placeholder='Encontre seu destino, restaurante ou atração' icon='search' />
        </View>

        <View style={styles.roadmap}>
          <View style={styles.mapHeader}>
            <Text style={styles.mapHeaderTitle}>Seu próximo roteiro</Text>
            <View style={styles.seeAllBox}>
              <Text style={styles.seeAllText}>ver todos</Text>
              <Feather style={styles.seeAllIcon} name='chevron-right' size={15} />
            </View>
          </View>
          <Map />

          <FlatList
            style={styles.list}
            data={routeList}
            horizontal={false}
            scrollEnabled={false}
            renderItem={({ item }) => <RouteCard route={item}/>}
            keyExtractor={item => item.name}
          />

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 28,
    backgroundColor: theme.color.white,
  },
  scroll: {
    flex: 1
  },
  header: {
    gap: 16
  },
  copy: {
    fontSize: theme.fontSize.xxl,
    color: theme.color.gray[800],
    fontFamily: theme.font.extrabold,
  },
  roadmap: {
    marginTop: 32,
  },
  mapHeader: {
    width: '100%',
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mapHeaderTitle: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.font.medium,
  },
  seeAllBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: theme.fontSize.sm,
    color: theme.color.gray[600],
    fontFamily: theme.font.normal
  },
  seeAllIcon: {
    color: theme.color.gray[600],
    marginTop: 3
  },
  list: {
    marginTop: 16,
  }
});
