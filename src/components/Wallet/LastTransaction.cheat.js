import React from 'react';
import { View, StyleSheet } from 'react-native';
import Arrow from '../Arrow';
import { SecondaryText } from '../Typography';

export default function LastTransaction({ lastTransaction }) {
  const isIncome = lastTransaction.type === 'income';

  return (
    <>
      <SecondaryText>Last transaction</SecondaryText>
      <View style={styles.container}>
        <Arrow type={lastTransaction.type} size={40} style={styles.arrow} />
        <View style={styles.textContainer}>
          <SecondaryText style={styles.bold}>{`${isIncome ? '+' : '-'} ${
            lastTransaction.value
          } USD`}</SecondaryText>
          <SecondaryText>{lastTransaction.label}</SecondaryText>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  arrow: {
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  textContainer: {
    justifyContent: 'center',
  },
});
