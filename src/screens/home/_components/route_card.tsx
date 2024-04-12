import { theme } from "@/theme";
import { routeList } from "@/utils/route-list";
import { StyleSheet, Text, View } from "react-native";

interface RouteCardProps {
  route: typeof routeList[number]
}

export function RouteCard({ route }: RouteCardProps) {

  const day = new Date(route.visitDate).getDay()
  let month = new Date(route.visitDate).toLocaleString('pt-BR', { month: 'long' }).slice(0, 3)
  month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase()

  return (
    <View style={styles.container}>
      <View style={styles.visit}>
        <Text style={styles.visitText}>{day}</Text>
        <Text style={styles.visitText}>{month}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentHeader}>{route.city}, {route.startTime} - {route.endTime}</Text>
          <Text style={styles.contentText}>{route.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 6,
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.gray[300]
  },
  visit: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  visitText: {
    fontFamily: theme.font.medium,
    fontSize: theme.fontSize.md
  },
  content: {
    flexDirection: 'column',
    width: 275,
  },
  contentHeader: {
    fontSize: theme.fontSize.xs,
    fontFamily: theme.font.normal,
    color: theme.color.gray[400]
  },
  contentText: {
    fontSize: theme.fontSize.lg,
    fontFamily: theme.font.semibold,
    textAlign: 'left'
  }
})