import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card({ children, style }) {
  return (
    <View style={[styles.container, styles.shadow, style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5,
  },
});
