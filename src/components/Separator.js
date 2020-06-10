import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
});

export default Separator;
