import React from 'react';
import { Text as RNText, StyleSheet, Platform } from 'react-native';
import { fontSize } from '../utils';

function makeTypographyComponent(typographyStyle, displayName) {
  const Typography = ({ style, children, ...rest }) => (
    <RNText style={[styles.common, typographyStyle, style]}>{children}</RNText>
  );

  Typography.displayName = displayName;

  return Typography;
}

const styles = StyleSheet.create({
  common: {
    ...Platform.select({
      android: { fontFamily: 'sans-serif-light' },
      ios: {
        fontWeight: '300',
      },
    }),
    fontSize: fontSize.medium,
  },
  primary: {
    color: 'black',
  },
  secondary: {
    color: 'white',
  },
});

const PrimaryText = makeTypographyComponent(styles.primary, 'PrimaryText');
const SecondaryText = makeTypographyComponent(
  styles.secondary,
  'SecondaryText',
);

export { PrimaryText, SecondaryText };
