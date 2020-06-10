import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors, fontSize } from '../utils';

export default function CloseButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      style={props.style}
    >
      <Icon name="close" size={fontSize.extraLarge} color={colors.dark} />
    </TouchableOpacity>
  );
}
