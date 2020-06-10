import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fontSize, SPACING_VALUE, iconSize } from '../utils';
import { PrimaryText } from './Typography';
import SwipeableItem from './SwipeableItem';

export default function PlannedPaymentItem({ label, type, value, onRemove }) {
  return (
    <SwipeableItem onRemove={onRemove}>
      <View style={styles.rectButton}>
        <PrimaryText style={styles.planLabel}>
          {label.toUpperCase()}
        </PrimaryText>
        <View style={styles.valueContainer}>
          <Icon
            name={type === 'income' ? 'trending-up' : 'trending-down'}
            size={iconSize.regular}
            color={type === 'income' ? colors.green : colors.red}
          />
          <PrimaryText style={styles.planValue}>{value}</PrimaryText>
          <PrimaryText style={styles.currency}>USD</PrimaryText>
        </View>
      </View>
    </SwipeableItem>
  );
}

const styles = StyleSheet.create({
  planLabel: {
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  planValue: {
    fontSize: fontSize.extraLarge,
    paddingHorizontal: SPACING_VALUE,
  },
  currency: {
    fontSize: fontSize.small,
  },
  rectButton: {
    paddingVertical: SPACING_VALUE / 2,
    paddingHorizontal: SPACING_VALUE,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 2,
    backgroundColor: colors.white,
  },
});
