import { Image, StyleSheet, View } from 'react-native'

interface AvatarProps {
  size?: number
}

export function Avatar({ size = 50 }: AvatarProps) {
  return (
    <View style={styles.container}>
      <Image 
      style={{ width: size, height: size, borderRadius: 100 }}
      source={{
        uri: 'https://api.dicebear.com/8.x/thumbs/png?seed=Cuddles'
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
  },
})