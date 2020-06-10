import * as SecureStore from 'expo-secure-store';
import { AsyncStorage, Platform } from 'react-native';

export const setItemAsync = (key, value) => {
  if (Platform.OS === 'web') {
    return AsyncStorage.setItem(key, value)
  }
  else {
    return SecureStore.setItemAsync(key, value)
  }
}

export const getItemAsync = (key) => {
  if (Platform.OS === 'web') {
    return AsyncStorage.getItem(key)
  }
  else {
    return SecureStore.getItemAsync(key)
  }
}

export const deleteItemAsync = (key) => {
  if (Platform.OS === 'web') {
    return AsyncStorage.removeItem(key)
  }
  else {
    return SecureStore.deleteItemAsync(key)
  }
}

