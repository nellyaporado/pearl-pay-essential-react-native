import React from 'react';
import { View, StyleSheet } from 'react-native';
import Arrow from './Arrow';
import { PrimaryText } from './Typography';
import { fontSize, iconSize } from '../utils';

const Transaction = ({ owner, participant, date, type, value, label }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <View style={styles.summary}>
        <Arrow type={type} size={iconSize.regular} style={styles.arrow} />
        <PrimaryText style={styles.title}>{value} USD</PrimaryText>
      </View>
      <PrimaryText style={styles.label}>{label}</PrimaryText>
    </View>
    <View style={styles.row}>
      <PrimaryText style={styles.italic}>
        {new Date(date).toDateString()}
      </PrimaryText>
      <PrimaryText style={styles.italic}>
        Participant: {participant}
      </PrimaryText>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  label: {
    fontSize: fontSize.large,
  },
  arrow: {
    marginRight: 10,
  },
});

export default Transaction;
