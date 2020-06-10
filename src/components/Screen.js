import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Screen({ children }) {
  return <SafeAreaView style={styles.screenContainer}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
