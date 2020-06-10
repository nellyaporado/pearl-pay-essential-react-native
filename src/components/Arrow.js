import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../utils';

const Arrow = ({ type, size, style }) => {
  return (
    <Icon
      name={type === 'income' ? 'trending-up' : 'trending-down'}
      size={size}
      color={type === 'income' ? colors.green : colors.red}
      style={style}
    />
  );
};

export default Arrow;
