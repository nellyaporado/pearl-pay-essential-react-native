import * as React from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, iconSize, SPACING_VALUE } from '../utils';

// const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const width = Dimensions.get('window').width;

export default class SwipeableItem extends React.Component {
  renderRightActions = (progress, dragX) => {
    //   const scale = dragX.interpolate({
    //     inputRange: [-80, 0],
    //     outputRange: [1, 0],
    //     extrapolate: 'clamp',
    //   });

    return (
      <RectButton style={styles.rightAction} onPress={this.props.onRemove}>
        <Icon
          name="delete-forever"
          size={iconSize.regular}
          color={colors.white}
          style={[styles.actionIcon]}
        />
      </RectButton>
    );
  };

  render() {
    const { children } = this.props;
    return (
      <Swipeable
        friction={1}
        rightThreshold={width / 3}
        renderRightActions={this.renderRightActions}
      >
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  actionIcon: {
    marginHorizontal: SPACING_VALUE,
  },
  rightAction: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: colors.red,
    justifyContent: 'center',
  },
});
