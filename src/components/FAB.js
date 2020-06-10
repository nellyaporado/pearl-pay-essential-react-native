import * as React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, iconSize, SPACING_VALUE } from '../utils';

function FAB({ onPress }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.iconContainer}>
          <Icon name="add" size={iconSize.regular} color={colors.white} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    backgroundColor: colors.green,
    position: 'absolute',
    margin: SPACING_VALUE,
    right: 0,
    bottom: 0,
    elevation: 6,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.24,
    shadowRadius: 6,
  },
  iconContainer: {
    height: 56,
    width: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FAB;
