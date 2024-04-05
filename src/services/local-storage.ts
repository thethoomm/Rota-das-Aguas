// Local Storage
import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeLocal = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error)
  }
}

export const getLocal = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(value)
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    // error reading value
  }
};