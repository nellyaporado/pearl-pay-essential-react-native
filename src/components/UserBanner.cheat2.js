import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { SecondaryText } from './Typography';
import Card from './Card';
import { iconSize, colors } from '../utils';

export default function UserBanner({ userName, onLogout }) {
  return (
    <Card style={styles.outerContainer}>
      <LinearGradient
        style={styles.container}
        colors={['#F95FE2', '#BD27F7']}
        start={[0, 0]}
        end={[1, 1]}
      >
        <View style={styles.info}>
          <Icon
            name="person-outline"
            size={iconSize.large}
            style={styles.icon}
            color={colors.white}
          />
          <SecondaryText style={styles.userName}>{userName}</SecondaryText>
        </View>
        <TouchableOpacity style={styles.logout} onPress={onLogout}>
          <SecondaryText type="light" style={styles.customFont}>Log out</SecondaryText>
        </TouchableOpacity>
      </LinearGradient>
    </Card>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
  },
  logout: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  customFont: {
    fontFamily: 'open-sans-regular'
  }
});
