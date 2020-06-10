import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SecondaryText } from '../Typography';
import LastTransaction from './LastTransaction';
import Card from '../Card';

const GRADIENTS = [
  ['#FAAE3E', '#F9D852'],
  ['#1270E4', '#59C0FB'],
  ['#F63080', '#FF7C6F'],
];

export default function Wallet({ balance, label, lastTransaction, index }) {
  return (
    <Card style={styles.container}>
      <LinearGradient
        colors={GRADIENTS[index % GRADIENTS.length]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.content}
      >
        <SecondaryText style={styles.bold}>{label}</SecondaryText>
        <View style={styles.summary}>
          <SecondaryText>
            <SecondaryText style={styles.balance}>{balance}</SecondaryText>
            <SecondaryText>USD</SecondaryText>
          </SecondaryText>
        </View>
        <LastTransaction lastTransaction={lastTransaction} />
      </LinearGradient>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  content: {
    padding: 20,
    borderRadius: 10,
  },
  summary: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  balance: {
    fontSize: 65,
  },
  bold: {
    fontWeight: 'bold',
  },
});
